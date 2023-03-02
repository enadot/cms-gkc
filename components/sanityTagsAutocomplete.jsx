import PatchEvent, { set, unset } from 'sanity';

import React, { useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import { withDocument } from 'sanity';

const createPatchFrom = (value) =>
  PatchEvent.from(value === '' ? unset() : set(value));

const CreatableMulti = (props) => {
  const [uniqueImageTags, setUniqueImageTags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selected, setSelected] = useState([]);

  // On component load, let's fetch all tags from all images and only keep unique ones
  useEffect(() => {
    // Component is loading! Hands off!
    setIsLoading(true);
    const query = '*[_type == "photo"] {photo}';

    const fetchTags = async () => {
      const allTags = [];
      const result = client.fetch(query).then((photos) => {
        const fillTags = photos.forEach((photo) => {
          allTags.push(photo.photo.tags);
        });

        // At this point, we have an array of arrays. Let's flatten this sucker!
        // @ts-ignore
        const flatTags = allTags.flat();

        // Now, let's create a new array that only includes unique tags
        const uniqueTags = Array.from(
          new Set(flatTags.map((tag) => tag.value))
        ).map((tagValue) => {
          return {
            value: tagValue,
            label: tagValue,
          };
        });

        setUniqueImageTags(uniqueTags);
        return fillTags;
      });
      return result;
    };

    // Ok, now let's populate the dropdown with tags already assigned.
    const setSelectedTags = async () => {
      setSelected(props.document.photo.tags);
    };
    fetchTags();
    setSelectedTags();

    // Component no longer loading
    setIsLoading(false);
  }, []);

  // Here we handle change to the tags when this change does not involve creating a new tag
  const handleChange = (newValue, actionMeta) => {
    setSelected(newValue);
    props.onChange(createPatchFrom(newValue));
  };

  // Ok, here's some fun: here we handle changes that involve creating new tags and
  // populating these new options into selected tags and all tags
  const createOption = (newValue) => {
    const newSelected = selected;
    newSelected.push({ value: newValue, label: newValue });
    setSelected(newSelected);

    // New tags need to be commited to Sanity so that we can reuse them elsewhere
    client
      .patch(props.document._id)
      .setIfMissing({ tags: [] }) // shouldn't be a factor, but who knows? 🤷
      .append('tags', [{ value: newValue, label: newValue }])
      .commit();
  };

  return (
    <>
      <h4>Tags</h4>
      <CreatableSelect
        disabled={isLoading}
        isLoading={isLoading}
        value={'' || selected}
        isMulti
        onChange={handleChange}
        onCreateOption={createOption}
        options={'' || uniqueImageTags}
      />
    </>
  );
};

export default withDocument(CreatableMulti);

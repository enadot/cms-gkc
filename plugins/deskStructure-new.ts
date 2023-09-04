
import { definePlugin, type DocumentDefinition } from "sanity";
import { type StructureResolver } from "sanity/desk";
import { DocumentsIcon, DocumentIcon, BookIcon } from "@sanity/icons";


export const settingsPlugin = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: "settings",
    document: {
      // Hide 'Settings' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === "global") {
          return prev.filter(
            (templateItem) => templateItem.templateId !== type
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the "settings" singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== "duplicate");
        }

        return prev;
      },
    },
  };
});

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
export const siteSettingsStructure = (
  typeDefs: DocumentDefinition[]
): StructureResolver => {
  return (S) => {
    const structures = typeDefs.map((typeDef) => {
      const listItem = S.listItem()
        .title(typeDef.title!)
        .icon(typeDef.icon)
        .child(
          S.editor()
            .id(typeDef.name)
            .schemaType(typeDef.name)
            .documentId(typeDef.name)
        );

      return listItem;
    });



    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) =>
        !typeDefs.some((typeDef) => listItem.getId() === typeDef.name) 
    );

    return S.list()
      .title("Base")
      .items([
        ...structures,
      
        S.divider(),
       
        ...defaultListItems,
      ]);
  };
};

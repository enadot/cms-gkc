import { CogIcon } from '@sanity/icons';

export default (S) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('settings')),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !['settings'].includes(item.getId())
      ),
    ]);

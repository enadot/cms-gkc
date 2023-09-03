import { CogIcon, StackCompactIcon, UsersIcon } from "@sanity/icons";
import { SEOPane } from "sanity-plugin-seo-pane";

export const defaultDocumentNodeResolver = (S) =>
  S.document().views([S.view.form()]);

export default (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .icon(CogIcon)
        .child(S.document().schemaType("settings").documentId("settings")),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => !["media.tag", "category", "author"].includes(item.getId())
      ),
      S.divider(),
      S.listItem()
        .title("Categories")
        .icon(StackCompactIcon)
        .child(
          S.documentTypeList("category")
            .title("Categories")
            .filter('_type == "category"')
        ),
      S.listItem()
        .title("Authors")
        .icon(UsersIcon)
        .child(
          S.documentTypeList("author")
            .title("Authors")
            .filter('_type == "author"')
        ),
    ]);

import { CogIcon } from "@sanity/icons";
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
        (item) => !["settings"].includes(item.getId())
      ),
    ]);

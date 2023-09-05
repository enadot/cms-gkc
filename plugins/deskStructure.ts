import {
  CogIcon,
  StackCompactIcon,
  UsersIcon,
  DocumentsIcon,
  ThListIcon,
  HomeIcon,
  BookIcon as CatalogIcon,
  DocumentIcon as PageIcon,
} from "@sanity/icons";
import { SEOPane } from "sanity-plugin-seo-pane";

export const defaultDocumentNodeResolver = (S) =>
  S.document().views([S.view.form()]);

export default (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Home")
        .icon(HomeIcon)
        .child(S.document().schemaType("home")),
      S.divider(),
      S.listItem()
        .title("Pages")
        .icon(DocumentsIcon)
        .child(
          S.list()
            .title("All Pages")
            .items([
              S.documentTypeListItem("kitchen")
                .title("Kitchens")
                .icon(PageIcon),
              S.documentTypeListItem("project")
                .title("Projects Gallery")
                .icon(PageIcon),
              S.documentTypeListItem("bathroom")
                .title("Bathroom Vanities")
                .icon(PageIcon),
              S.documentTypeListItem("interiorValue")
                .title("Interior Values")
                .icon(PageIcon),
              S.documentTypeListItem("landingPage")
                .title("Landing Pages")
                .icon(PageIcon),
            ])
        ),
      S.listItem()
        .title("Finishes Browser")
        .icon(ThListIcon)
        .child(
          S.list()
            .title("All Types")
            .items([
              S.documentTypeListItem("program").title("Programs"),
              S.documentTypeListItem("color").title("Colors"),
            ])
        ),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "home",
            "settings",
            "media.tag",
            "catalog",
            "category",
            "author",
            "finish",
            "program",
            "project",
            "kitchen",
            "bathroom",
            "interiorValue",
            "landingPage",
          ].includes(item.getId())
      ),
      S.listItem()
        .title("Categories")
        .icon(StackCompactIcon)
        .child(S.documentTypeList("category").title("Categories")),
      S.listItem()
        .title("Authors")
        .icon(UsersIcon)
        .child(
          S.documentTypeList("author")
            .title("Authors")
            .filter('_type == "author"')
        ),
      S.divider(),
      S.listItem()
        .title("Catalogs")
        .icon(CatalogIcon)
        .child(S.documentTypeList("catalog").title("Catalogs")),

      S.divider(),

      S.listItem()
        .title("Settings")
        .icon(CogIcon)
        .child(S.document().schemaType("settings").documentId("settings")),
    ]);

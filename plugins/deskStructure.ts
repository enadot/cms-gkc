import {
  CogIcon,
  StackCompactIcon,
  UsersIcon,
  DocumentsIcon,
  ThListIcon,
  HomeIcon,
  CalendarIcon,
  BookIcon as CatalogIcon,
  DocumentIcon as PageIcon,
} from "@sanity/icons";
import { DefaultDocumentNodeResolver, StructureBuilder } from "sanity/desk";
import Iframe from "sanity-plugin-iframe-pane";
import { SanityDocument } from "next-sanity";

const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3002"
    : "https://www.gkcqueens.com";

export const defaultDocumentNodeResolver: DefaultDocumentNodeResolver = (
  S: StructureBuilder,
  { schemaType }
) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocument) =>
              doc?.slug?.current
                ? `${baseUrl}/api/preview?slug=${doc.slug.current}`
                : `${baseUrl}/api/preview`,
          })
          .title("Preview"),
      ]);
    default:
      return S.document().views([S.view.form()]);
  }
};

export default (S: StructureBuilder) =>
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
            "post",
            "home",
            "color",
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
        .title("Blog")
        .icon(CalendarIcon)
        .child(S.documentTypeList("post").title("Posts")),
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

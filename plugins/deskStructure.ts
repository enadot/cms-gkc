<<<<<<< HEAD
import { definePlugin, type DocumentDefinition } from "sanity";
import { type StructureResolver } from "sanity/desk";
import { DocumentsIcon, DocumentIcon, BookIcon } from "@sanity/icons";

function toSentenceCase(str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
// Renders all the pages & menus in the "Pages" & "Menus" list
const pageNames = ["menus", "about", "events", "catering", "contact"];
const menus = ["lunch", "brunch", "dinner", "drinks", "cateringMenu"];

export const pagesList = pageNames.map((pageName) => ({
  title: toSentenceCase(pageName),
  schemaType: pageName,
  documentId: pageName,
}));

export const menusList = menus.map((menu) => ({
  title: toSentenceCase(menu),
  schemaType: menu,
  documentId: menu,
}));

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

    const pagesListItems = pagesList.map((page) =>
      S.listItem()
        .title(page.title)
        .icon(DocumentIcon)
        .child(
          S.document()
            .schemaType(page.schemaType)
            .documentId(page.documentId)
            .title(`${page.title} Page`)
        )
    );

    const pagesItems = S.listItem()
      .title("Pages")
      .icon(DocumentsIcon)
      .child(S.list().title("All Pages").items(pagesListItems));

    const menusListItems = menusList.map((menu) =>
      S.listItem()
        .title(menu.title === "Cateringmenu" ? `Catering` : `${menu.title}`)
        .icon(BookIcon)
        .child(
          S.document()
            .schemaType(menu.schemaType)
            .documentId(menu.documentId)
            .title(
              menu.title === "Cateringmenu"
                ? `Catering Menu`
                : `${menu.title} Menu`
            )
        )
    );

    const menusItems = S.listItem()
      .title("Menus")
      .icon(BookIcon)
      .child(S.list().title("All Menus").items(menusListItems));

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) =>
        !typeDefs.some((typeDef) => listItem.getId() === typeDef.name) &&
        !pagesList.some((page) => listItem.getId() === page.schemaType) &&
        !menusList.some((menu) => listItem.getId() === menu.schemaType) &&
        listItem.getId() === "Menus"
    );

    return S.list()
      .title("Base")
      .items([
        ...structures,
        pagesItems,
        S.divider(),
        menusItems,
        ...defaultListItems,
      ]);
  };
};
=======
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
              S.documentTypeListItem("finish").title("Finishes"),
            ])
        ),
      S.divider(),

      ...S.documentTypeListItems().filter(
        (item) =>
          ![
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
>>>>>>> f91efac5851721f5552623c0d308c127742a78a6

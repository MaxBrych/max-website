import { defineField, defineType } from "sanity";
import { FiTag } from "react-icons/fi";

export default defineType({
  name: "category",
  title: "Category",
  type: "document",
  icon: FiTag,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
  ],
});

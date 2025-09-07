import { defineField, defineType } from "sanity";

export default defineType({
  name: "dog",
  title: "Pes",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Meno",
      type: "string",
      validation: r => r.required()
    }),
    defineField({
      name: "sex",
      title: "Pohlavie",
      type: "string",
      options: {
        list: [
          { title: "Pes (♂)", value: "male" },
          { title: "Fena (♀)", value: "female" },
        ],
        layout: "radio"
      }
    }),
    defineField({
      name: "ageValue",
      title: "Vek",
      type: "number",
      validation: r => r.min(0)
    }),
    defineField({
      name: "ageUnit",
      title: "Jednotka veku",
      type: "string",
      options: {
        list: [
          { title: "Roky", value: "years" },
          { title: "Mesiace", value: "months" }
        ],
        layout: "radio"
      }
    }),
    defineField({
      name: "photo",
      title: "Fotka",
      type: "image",
      options: { hotspot: true } // umožní orezanie a výrez
    }),
  ],
});

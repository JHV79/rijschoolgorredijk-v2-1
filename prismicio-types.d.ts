// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Image field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * TermsConditions field in *Footer*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.termsconditions
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  termsconditions: prismic.LinkToMediaField;

  /**
   * Facebook field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.facebook
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  facebook: prismic.LinkField;

  /**
   * Instagram field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.instagram
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  instagram: prismic.LinkField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

/**
 * Item in *Global settings → Opening hours*
 */
export interface GlobalSettingsDocumentDataOpeningHoursItem {
  /**
   * Range field in *Global settings → Opening hours*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.opening_hours[].range
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  range: prismic.KeyTextField;
}

/**
 * Content for Global settings documents
 */
interface GlobalSettingsDocumentData {
  /**
   * Name field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Company image field in *Global settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.company_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  company_image: prismic.ImageField<never>;

  /**
   * Logo field in *Global settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * E-mail field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Telephone field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.telephone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  telephone: prismic.KeyTextField;

  /**
   * Street address field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.street_address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  street_address: prismic.KeyTextField;

  /**
   * Postal code field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.postal_code
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  postal_code: prismic.KeyTextField;

  /**
   * Address locality field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.address_locality
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address_locality: prismic.KeyTextField;

  /**
   * Address region field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.address_region
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address_region: prismic.KeyTextField;

  /**
   * Address country field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.address_country
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address_country: prismic.KeyTextField;

  /**
   * Latitude field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.latitude
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  latitude: prismic.KeyTextField;

  /**
   * Longitude field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.longitude
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  longitude: prismic.KeyTextField;

  /**
   * Opening hours field in *Global settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.opening_hours[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  opening_hours: prismic.GroupField<
    Simplify<GlobalSettingsDocumentDataOpeningHoursItem>
  >;

  /**
   * Domain field in *Global settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: global_settings.domain
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  domain: prismic.KeyTextField;
}

/**
 * Global settings document from Prismic
 *
 * - **API ID**: `global_settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type GlobalSettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<GlobalSettingsDocumentData>,
    "global_settings",
    Lang
  >;

type IndexDocumentDataSlicesSlice =
  | QuestionAnswerSlice
  | HeroSlice
  | SimpleTextBlockSlice
  | GridTwoColumnsSlice
  | UniuqeSellingPointsSlice
  | GridThreeColumnsSlice;

/**
 * Content for Index documents
 */
interface IndexDocumentData {
  /**
   * Slice Zone field in *Index*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: index.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<IndexDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Index*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: index.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Index*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: index.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Index*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: index.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Index document from Prismic
 *
 * - **API ID**: `index`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type IndexDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<IndexDocumentData>, "index", Lang>;

type PageDocumentDataSlicesSlice =
  | GridThreeColumnsSlice
  | GridTwoColumnsSlice
  | HeroSlice
  | SimpleTextBlockSlice
  | QuestionAnswerSlice
  | JobPostingSlice
  | UniuqeSellingPointsSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *QuestionAnswer → Items*
 */
export interface QuestionanswerDocumentDataItemsItem {
  /**
   * Question field in *QuestionAnswer → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: questionanswer.items[].question
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  question: prismic.KeyTextField;

  /**
   * Answer field in *QuestionAnswer → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: questionanswer.items[].answer
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  answer: prismic.RichTextField;
}

/**
 * Content for QuestionAnswer documents
 */
interface QuestionanswerDocumentData {
  /**
   * Items field in *QuestionAnswer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: questionanswer.items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  items: prismic.GroupField<Simplify<QuestionanswerDocumentDataItemsItem>>;
}

/**
 * QuestionAnswer document from Prismic
 *
 * - **API ID**: `questionanswer`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type QuestionanswerDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<QuestionanswerDocumentData>,
    "questionanswer",
    Lang
  >;

export type AllDocumentTypes =
  | FooterDocument
  | GlobalSettingsDocument
  | IndexDocument
  | PageDocument
  | QuestionanswerDocument;

/**
 * Primary content in *GridThreeColumns → Primary*
 */
export interface GridThreeColumnsSliceDefaultPrimary {
  /**
   * Heading field in *GridThreeColumns → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_three_columns.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Image field in *GridThreeColumns → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_three_columns.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Content field in *GridThreeColumns → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_three_columns.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for GridThreeColumns Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GridThreeColumnsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GridThreeColumnsSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *GridThreeColumns → Primary*
 */
export interface GridThreeColumnsSliceTextMiddlePrimary {
  /**
   * Heading field in *GridThreeColumns → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_three_columns.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Image field in *GridThreeColumns → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_three_columns.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Content field in *GridThreeColumns → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_three_columns.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * TextMiddle variation for GridThreeColumns Slice
 *
 * - **API ID**: `textMiddle`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GridThreeColumnsSliceTextMiddle = prismic.SharedSliceVariation<
  "textMiddle",
  Simplify<GridThreeColumnsSliceTextMiddlePrimary>,
  never
>;

/**
 * Slice variation for *GridThreeColumns*
 */
type GridThreeColumnsSliceVariation =
  | GridThreeColumnsSliceDefault
  | GridThreeColumnsSliceTextMiddle;

/**
 * GridThreeColumns Shared Slice
 *
 * - **API ID**: `grid_three_columns`
 * - **Description**: GridThreeColumns
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GridThreeColumnsSlice = prismic.SharedSlice<
  "grid_three_columns",
  GridThreeColumnsSliceVariation
>;

/**
 * Primary content in *GridTwoColumns → Primary*
 */
export interface GridTwoColumnsSliceDefaultPrimary {
  /**
   * Image field in *GridTwoColumns → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_two_columns.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Content field in *GridTwoColumns → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_two_columns.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Background field in *GridTwoColumns → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_two_columns.primary.background
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background: prismic.ColorField;
}

/**
 * Default variation for GridTwoColumns Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GridTwoColumnsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GridTwoColumnsSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *GridTwoColumns → Primary*
 */
export interface GridTwoColumnsSliceTextLeftPrimary {
  /**
   * Image field in *GridTwoColumns → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_two_columns.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Content field in *GridTwoColumns → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_two_columns.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Background field in *GridTwoColumns → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: grid_two_columns.primary.background
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background: prismic.ColorField;
}

/**
 * Text left variation for GridTwoColumns Slice
 *
 * - **API ID**: `textLeft`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GridTwoColumnsSliceTextLeft = prismic.SharedSliceVariation<
  "textLeft",
  Simplify<GridTwoColumnsSliceTextLeftPrimary>,
  never
>;

/**
 * Slice variation for *GridTwoColumns*
 */
type GridTwoColumnsSliceVariation =
  | GridTwoColumnsSliceDefault
  | GridTwoColumnsSliceTextLeft;

/**
 * GridTwoColumns Shared Slice
 *
 * - **API ID**: `grid_two_columns`
 * - **Description**: GridTwoColumns
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GridTwoColumnsSlice = prismic.SharedSlice<
  "grid_two_columns",
  GridTwoColumnsSliceVariation
>;

/**
 * Primary content in *Hero → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * Image field in *Hero → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Heading 1 field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading_1
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading_1: prismic.KeyTextField;

  /**
   * Heading 2 field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.heading_2
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading_2: prismic.KeyTextField;

  /**
   * CTA text field in *Hero → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_text: prismic.KeyTextField;

  /**
   * CTA Link field in *Hero → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.primary.cta_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  cta_link: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *JobPosting → Primary*
 */
export interface JobPostingSliceDefaultPrimary {
  /**
   * Title field in *JobPosting → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: job_posting.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *JobPosting → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: job_posting.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Date posted field in *JobPosting → Primary*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: job_posting.primary.date_posted
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  date_posted: prismic.DateField;

  /**
   * Employment type field in *JobPosting → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **Default Value**: FULL_TIME
   * - **API ID Path**: job_posting.primary.employment_type
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  employment_type: prismic.SelectField<
    | "FULL_TIME"
    | "PART_TIME"
    | "CONTRACTOR"
    | "TEMPORARY"
    | "INTERN"
    | "VOLUNTEER"
    | "PER_DIEM"
    | "OTHER",
    "filled"
  >;
}

/**
 * Default variation for JobPosting Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type JobPostingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<JobPostingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *JobPosting*
 */
type JobPostingSliceVariation = JobPostingSliceDefault;

/**
 * JobPosting Shared Slice
 *
 * - **API ID**: `job_posting`
 * - **Description**: JobPosting
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type JobPostingSlice = prismic.SharedSlice<
  "job_posting",
  JobPostingSliceVariation
>;

/**
 * Primary content in *QuestionAnswer → Items*
 */
export interface QuestionAnswerSliceDefaultItem {
  /**
   * Heading field in *QuestionAnswer → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: question_answer.items[].heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Items field in *QuestionAnswer → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: question_answer.items[].items
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  items: prismic.ContentRelationshipField<"questionanswer">;
}

/**
 * Default variation for QuestionAnswer Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuestionAnswerSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<QuestionAnswerSliceDefaultItem>
>;

/**
 * Slice variation for *QuestionAnswer*
 */
type QuestionAnswerSliceVariation = QuestionAnswerSliceDefault;

/**
 * QuestionAnswer Shared Slice
 *
 * - **API ID**: `question_answer`
 * - **Description**: QuestionAnswer
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type QuestionAnswerSlice = prismic.SharedSlice<
  "question_answer",
  QuestionAnswerSliceVariation
>;

/**
 * Primary content in *SimpleTextBlock → Primary*
 */
export interface SimpleTextBlockSliceDefaultPrimary {
  /**
   * Content field in *SimpleTextBlock → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: simple_text_block.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for SimpleTextBlock Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SimpleTextBlockSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SimpleTextBlockSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *SimpleTextBlock*
 */
type SimpleTextBlockSliceVariation = SimpleTextBlockSliceDefault;

/**
 * SimpleTextBlock Shared Slice
 *
 * - **API ID**: `simple_text_block`
 * - **Description**: SimpleTextBlock
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SimpleTextBlockSlice = prismic.SharedSlice<
  "simple_text_block",
  SimpleTextBlockSliceVariation
>;

/**
 * Primary content in *UniuqeSellingPoints → Items*
 */
export interface UniuqeSellingPointsSliceDefaultItem {
  /**
   * Selling point field in *UniuqeSellingPoints → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: uniuqe_selling_points.items[].selling_point
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  selling_point: prismic.RichTextField;
}

/**
 * Default variation for UniuqeSellingPoints Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type UniuqeSellingPointsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<UniuqeSellingPointsSliceDefaultItem>
>;

/**
 * Slice variation for *UniuqeSellingPoints*
 */
type UniuqeSellingPointsSliceVariation = UniuqeSellingPointsSliceDefault;

/**
 * UniuqeSellingPoints Shared Slice
 *
 * - **API ID**: `uniuqe_selling_points`
 * - **Description**: UniuqeSellingPoints
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type UniuqeSellingPointsSlice = prismic.SharedSlice<
  "uniuqe_selling_points",
  UniuqeSellingPointsSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      GlobalSettingsDocument,
      GlobalSettingsDocumentData,
      IndexDocument,
      IndexDocumentData,
      IndexDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      QuestionanswerDocument,
      QuestionanswerDocumentData,
      AllDocumentTypes,
      GridThreeColumnsSlice,
      GridThreeColumnsSliceDefaultPrimary,
      GridThreeColumnsSliceTextMiddlePrimary,
      GridThreeColumnsSliceVariation,
      GridThreeColumnsSliceDefault,
      GridThreeColumnsSliceTextMiddle,
      GridTwoColumnsSlice,
      GridTwoColumnsSliceDefaultPrimary,
      GridTwoColumnsSliceTextLeftPrimary,
      GridTwoColumnsSliceVariation,
      GridTwoColumnsSliceDefault,
      GridTwoColumnsSliceTextLeft,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      JobPostingSlice,
      JobPostingSliceDefaultPrimary,
      JobPostingSliceVariation,
      JobPostingSliceDefault,
      QuestionAnswerSlice,
      QuestionAnswerSliceDefaultItem,
      QuestionAnswerSliceVariation,
      QuestionAnswerSliceDefault,
      SimpleTextBlockSlice,
      SimpleTextBlockSliceDefaultPrimary,
      SimpleTextBlockSliceVariation,
      SimpleTextBlockSliceDefault,
      UniuqeSellingPointsSlice,
      UniuqeSellingPointsSliceDefaultItem,
      UniuqeSellingPointsSliceVariation,
      UniuqeSellingPointsSliceDefault,
    };
  }
}

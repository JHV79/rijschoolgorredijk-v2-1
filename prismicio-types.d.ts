// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *EmailForm → Input text*
 */
export interface EmailformDocumentDataInputTextItem {
  /**
   * name field in *EmailForm → Input text*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: emailform.input_text[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Label field in *EmailForm → Input text*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: emailform.input_text[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for EmailForm documents
 */
interface EmailformDocumentData {
  /**
   * Recipient field in *EmailForm*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: emailform.recipient
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  recipient: prismic.KeyTextField;

  /**
   * Input text field in *EmailForm*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: emailform.input_text[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  input_text: prismic.GroupField<Simplify<EmailformDocumentDataInputTextItem>>;
}

/**
 * EmailForm document from Prismic
 *
 * - **API ID**: `emailform`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type EmailformDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<EmailformDocumentData>,
    "emailform",
    Lang
  >;

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

  /**
   * Telephone text field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.telephone_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  telephone_text: prismic.KeyTextField;

  /**
   * Telephone link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.telephone_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  telephone_link: prismic.LinkField;

  /**
   * Email text field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.email_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_text: prismic.KeyTextField;

  /**
   * Email link field in *Footer*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.email_link
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  email_link: prismic.LinkField;

  /**
   * Opening hours field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.opening_hours
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  opening_hours: prismic.RichTextField;
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
  | UsefulLinksSlice
  | ServicePricingSlice
  | GoogleRatingSlice
  | InstructorListingSlice
  | JobPostingSlice
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
  | UsefulLinksSlice
  | ServicePricingSlice
  | GoogleRatingSlice
  | InstructorListingSlice
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
  | EmailformDocument
  | FooterDocument
  | GlobalSettingsDocument
  | IndexDocument
  | PageDocument
  | QuestionanswerDocument;

/**
 * Primary content in *GoogleRating → Primary*
 */
export interface GoogleRatingSliceDefaultPrimary {
  /**
   * Heading field in *GoogleRating → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: google_rating.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Subtext field in *GoogleRating → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: google_rating.primary.subtext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtext: prismic.KeyTextField;
}

/**
 * Default variation for GoogleRating Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GoogleRatingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<GoogleRatingSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *GoogleRating*
 */
type GoogleRatingSliceVariation = GoogleRatingSliceDefault;

/**
 * GoogleRating Shared Slice
 *
 * - **API ID**: `google_rating`
 * - **Description**: GoogleRating
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type GoogleRatingSlice = prismic.SharedSlice<
  "google_rating",
  GoogleRatingSliceVariation
>;

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
 * Primary content in *Hero → Items*
 */
export interface HeroSliceDefaultItem {
  /**
   * Image field in *Hero → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
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
  Simplify<HeroSliceDefaultItem>
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
 * Primary content in *InstructorListing → Items*
 */
export interface InstructorListingSliceDefaultItem {
  /**
   * Name field in *InstructorListing → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: instructor_listing.items[].name
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Description field in *InstructorListing → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: instructor_listing.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Image field in *InstructorListing → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: instructor_listing.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for InstructorListing Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InstructorListingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<InstructorListingSliceDefaultItem>
>;

/**
 * Slice variation for *InstructorListing*
 */
type InstructorListingSliceVariation = InstructorListingSliceDefault;

/**
 * InstructorListing Shared Slice
 *
 * - **API ID**: `instructor_listing`
 * - **Description**: InstructorListing
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type InstructorListingSlice = prismic.SharedSlice<
  "instructor_listing",
  InstructorListingSliceVariation
>;

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
 * Primary content in *ServicePricing → Primary*
 */
export interface ServicePricingSliceDefaultPrimary {
  /**
   * Heading field in *ServicePricing → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_pricing.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Footnote field in *ServicePricing → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_pricing.primary.footnote
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  footnote: prismic.RichTextField;

  /**
   * Content field in *ServicePricing → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_pricing.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Primary content in *ServicePricing → Items*
 */
export interface ServicePricingSliceDefaultItem {
  /**
   * Content field in *ServicePricing → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: service_pricing.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Price field in *ServicePricing → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: service_pricing.items[].price
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  price: prismic.NumberField;
}

/**
 * Default variation for ServicePricing Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicePricingSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicePricingSliceDefaultPrimary>,
  Simplify<ServicePricingSliceDefaultItem>
>;

/**
 * Slice variation for *ServicePricing*
 */
type ServicePricingSliceVariation = ServicePricingSliceDefault;

/**
 * ServicePricing Shared Slice
 *
 * - **API ID**: `service_pricing`
 * - **Description**: ServicePricing
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicePricingSlice = prismic.SharedSlice<
  "service_pricing",
  ServicePricingSliceVariation
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

/**
 * Primary content in *UsefulLinks → Primary*
 */
export interface UsefulLinksSliceDefaultPrimary {
  /**
   * Heading field in *UsefulLinks → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: useful_links.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Primary content in *UsefulLinks → Items*
 */
export interface UsefulLinksSliceDefaultItem {
  /**
   * Content field in *UsefulLinks → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: useful_links.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;

  /**
   * Link field in *UsefulLinks → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: useful_links.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Default variation for UsefulLinks Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type UsefulLinksSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<UsefulLinksSliceDefaultPrimary>,
  Simplify<UsefulLinksSliceDefaultItem>
>;

/**
 * Slice variation for *UsefulLinks*
 */
type UsefulLinksSliceVariation = UsefulLinksSliceDefault;

/**
 * UsefulLinks Shared Slice
 *
 * - **API ID**: `useful_links`
 * - **Description**: UsefulLinks
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type UsefulLinksSlice = prismic.SharedSlice<
  "useful_links",
  UsefulLinksSliceVariation
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
      EmailformDocument,
      EmailformDocumentData,
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
      GoogleRatingSlice,
      GoogleRatingSliceDefaultPrimary,
      GoogleRatingSliceVariation,
      GoogleRatingSliceDefault,
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
      HeroSliceDefaultItem,
      HeroSliceVariation,
      HeroSliceDefault,
      InstructorListingSlice,
      InstructorListingSliceDefaultItem,
      InstructorListingSliceVariation,
      InstructorListingSliceDefault,
      JobPostingSlice,
      JobPostingSliceDefaultPrimary,
      JobPostingSliceVariation,
      JobPostingSliceDefault,
      QuestionAnswerSlice,
      QuestionAnswerSliceDefaultItem,
      QuestionAnswerSliceVariation,
      QuestionAnswerSliceDefault,
      ServicePricingSlice,
      ServicePricingSliceDefaultPrimary,
      ServicePricingSliceDefaultItem,
      ServicePricingSliceVariation,
      ServicePricingSliceDefault,
      SimpleTextBlockSlice,
      SimpleTextBlockSliceDefaultPrimary,
      SimpleTextBlockSliceVariation,
      SimpleTextBlockSliceDefault,
      UniuqeSellingPointsSlice,
      UniuqeSellingPointsSliceDefaultItem,
      UniuqeSellingPointsSliceVariation,
      UniuqeSellingPointsSliceDefault,
      UsefulLinksSlice,
      UsefulLinksSliceDefaultPrimary,
      UsefulLinksSliceDefaultItem,
      UsefulLinksSliceVariation,
      UsefulLinksSliceDefault,
    };
  }
}

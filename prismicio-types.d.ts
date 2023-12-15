// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BannerDocumentDataSlicesSlice = never;

/**
 * Content for Banner documents
 */
interface BannerDocumentData {
  /**
   * Título field in *Banner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.titulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Subtítulo field in *Banner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.subtitulo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitulo: prismic.KeyTextField;

  /**
   * Texto field in *Banner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.texto
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  texto: prismic.KeyTextField;

  /**
   * Label_CTA field in *Banner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.label_cta
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label_cta: prismic.KeyTextField;

  /**
   * Video field in *Banner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.video
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  video: prismic.KeyTextField;

  /**
   * Slice Zone field in *Banner*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BannerDocumentDataSlicesSlice> /**
   * Meta Description field in *Banner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: banner.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Banner*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: banner.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Banner*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: banner.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Banner document from Prismic
 *
 * - **API ID**: `banner`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BannerDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<BannerDocumentData>, "banner", Lang>;

type BlogDocumentDataSlicesSlice = RecentsPostsAndCategoriesSlice;

/**
 * Content for Blog documents
 */
interface BlogDocumentData {
  /**
   * Slice Zone field in *Blog*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogDocumentDataSlicesSlice> /**
   * Meta Description field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog document from Prismic
 *
 * - **API ID**: `blog`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<BlogDocumentData>, "blog", Lang>;

/**
 * Content for Category documents
 */
interface CategoryDocumentData {
  /**
   * Name field in *Category*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: category.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;
}

/**
 * Category document from Prismic
 *
 * - **API ID**: `category`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CategoryDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CategoryDocumentData>,
    "category",
    Lang
  >;

/**
 * Item in *FAQ → item*
 */
export interface FaqDocumentDataItemItem {
  /**
   * pergunta field in *FAQ → item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.item[].pergunta
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  pergunta: prismic.KeyTextField;

  /**
   * resposta field in *FAQ → item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.item[].resposta
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  resposta: prismic.KeyTextField;

  /**
   * topico field in *FAQ → item*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.item[].topico
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  topico: prismic.KeyTextField;
}

type FaqDocumentDataSlicesSlice = never;

/**
 * Content for FAQ documents
 */
interface FaqDocumentData {
  /**
   * Banner Texto field in *FAQ*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.banner_texto
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  banner_texto: prismic.KeyTextField;

  /**
   * item field in *FAQ*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.item[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  item: prismic.GroupField<Simplify<FaqDocumentDataItemItem>>;

  /**
   * Slice Zone field in *FAQ*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FaqDocumentDataSlicesSlice> /**
   * Meta Description field in *FAQ*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: faq.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *FAQ*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: faq.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *FAQ*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: faq.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * FAQ document from Prismic
 *
 * - **API ID**: `faq`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FaqDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FaqDocumentData>, "faq", Lang>;

/**
 * Item in *Footer → Links Navegação*
 */
export interface FooterDocumentDataLinksItem {
  /**
   * Label field in *Footer → Links Navegação*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Footer → Links Navegação*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Item in *Footer → Labels Contato*
 */
export interface FooterDocumentDataLabelsContatoItem {
  /**
   * label field in *Footer → Labels Contato*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.labels_contato[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *Footer → Botões Contato*
 */
export interface FooterDocumentDataBotoesContatoItem {
  /**
   * Icone field in *Footer → Botões Contato*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.botoes_contato[].icone
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone: prismic.ImageField<never>;

  /**
   * Link field in *Footer → Botões Contato*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.botoes_contato[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

/**
 * Item in *Footer → Redes Sociais*
 */
export interface FooterDocumentDataRedesSociaisItem {
  /**
   * Icone field in *Footer → Redes Sociais*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.redes_sociais[].icone
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icone: prismic.ImageField<never>;

  /**
   * Link field in *Footer → Redes Sociais*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.redes_sociais[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

type FooterDocumentDataSlicesSlice = never;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Logo field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Descrição Logo field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.descricao_logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao_logo: prismic.KeyTextField;

  /**
   * CTA Label field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.cta_label
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  cta_label: prismic.KeyTextField;

  /**
   * Subtítulo Navegação field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.subtitulo_navegacao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitulo_navegacao: prismic.KeyTextField;

  /**
   * Links Navegação field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<FooterDocumentDataLinksItem>>;

  /**
   * Subtítulo Contato field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.subtitulo_contato
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitulo_contato: prismic.KeyTextField;

  /**
   * Labels Contato field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.labels_contato[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  labels_contato: prismic.GroupField<
    Simplify<FooterDocumentDataLabelsContatoItem>
  >;

  /**
   * Botões Contato field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.botoes_contato[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  botoes_contato: prismic.GroupField<
    Simplify<FooterDocumentDataBotoesContatoItem>
  >;

  /**
   * Subtítulo Newsletter field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.subtitulo_newsletter
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitulo_newsletter: prismic.KeyTextField;

  /**
   * Descrição Newsletter field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.descricao_newsletter
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao_newsletter: prismic.KeyTextField;

  /**
   * Direitos field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.direitos
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  direitos: prismic.KeyTextField;

  /**
   * Endereço field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.endereco
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  endereco: prismic.KeyTextField;

  /**
   * Redes Sociais field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.redes_sociais[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  redes_sociais: prismic.GroupField<
    Simplify<FooterDocumentDataRedesSociaisItem>
  >;

  /**
   * Slice Zone field in *Footer*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<FooterDocumentDataSlicesSlice> /**
   * Meta Description field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: footer.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Footer*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: footer.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<FooterDocumentData>, "footer", Lang>;

/**
 * Item in *Header → Links*
 */
export interface HeaderDocumentDataLinksItem {
  /**
   * Label field in *Header → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;

  /**
   * Link field in *Header → Links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.links[].link
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link: prismic.KeyTextField;
}

type HeaderDocumentDataSlicesSlice = never;

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Logo field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Logo Mobile field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo_mobile
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_mobile: prismic.ImageField<never>;

  /**
   * Logo Menu Aberto field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo_menu_aberto
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo_menu_aberto: prismic.ImageField<never>;

  /**
   * Links field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<HeaderDocumentDataLinksItem>>;

  /**
   * Label CTA field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.label_cta
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label_cta: prismic.KeyTextField;

  /**
   * Label Entrar field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.label_entrar
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label_entrar: prismic.KeyTextField;

  /**
   * Slice Zone field in *Header*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: header.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HeaderDocumentDataSlicesSlice>;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<HeaderDocumentData>, "header", Lang>;

type LandingPageDocumentDataSlicesSlice =
  | BigNumbersSliceSlice
  | PartnersSliceSlice
  | ContatoSlice
  | CasesSliceSlice
  | FeaturesSliceSlice;

/**
 * Content for Landing Page documents
 */
interface LandingPageDocumentData {
  /**
   * Slice Zone field in *Landing Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<LandingPageDocumentDataSlicesSlice> /**
   * Meta Description field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: landing_page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Landing Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: landing_page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Landing Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: landing_page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Landing Page document from Prismic
 *
 * - **API ID**: `landing_page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LandingPageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<LandingPageDocumentData>,
    "landing_page",
    Lang
  >;

export type AllDocumentTypes =
  | BannerDocument
  | BlogDocument
  | CategoryDocument
  | FaqDocument
  | FooterDocument
  | HeaderDocument
  | LandingPageDocument;

/**
 * Primary content in *BigNumbersSlice → Primary*
 */
export interface BigNumbersSliceSliceDefaultPrimary {
  /**
   * BigNumbersTitle field in *BigNumbersSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: big_numbers_slice.primary.bignumberstitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bignumberstitle: prismic.KeyTextField;

  /**
   * BigNumbersTitleHighlights field in *BigNumbersSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Palavras para destacar
   * - **API ID Path**: big_numbers_slice.primary.bignumberstitlehighlights
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bignumberstitlehighlights: prismic.KeyTextField;

  /**
   * BigNumbersSliceButtontext field in *BigNumbersSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: big_numbers_slice.primary.bignumbersslicebuttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bignumbersslicebuttontext: prismic.KeyTextField;

  /**
   * BigNumbersSliceButtonLink field in *BigNumbersSlice → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: big_numbers_slice.primary.bignumbersslicebuttonlink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  bignumbersslicebuttonlink: prismic.LinkField;

  /**
   * BigNumbersImage field in *BigNumbersSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: big_numbers_slice.primary.bignumbersimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  bignumbersimage: prismic.ImageField<never>;

  /**
   * BigNumbersImageVisibility field in *BigNumbersSlice → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: big_numbers_slice.primary.bignumbersimagevisibility
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  bignumbersimagevisibility: prismic.BooleanField;
}

/**
 * Primary content in *BigNumbersSlice → Items*
 */
export interface BigNumbersSliceSliceDefaultItem {
  /**
   * BigNumberSliceTriggerTitle field in *BigNumbersSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: big_numbers_slice.items[].bignumberslicetriggertitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  bignumberslicetriggertitle: prismic.KeyTextField;

  /**
   * BigNumberSliceTriggerNumber field in *BigNumbersSlice → Items*
   *
   * - **Field Type**: Number
   * - **Placeholder**: *None*
   * - **API ID Path**: big_numbers_slice.items[].bignumberslicetriggernumber
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  bignumberslicetriggernumber: prismic.NumberField;

  /**
   * BigNumberSliceTriggerNumberFraction field in *BigNumbersSlice → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: big_numbers_slice.items[].bignumberslicetriggernumberfraction
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  bignumberslicetriggernumberfraction: prismic.BooleanField;
}

/**
 * Default variation for BigNumbersSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BigNumbersSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<BigNumbersSliceSliceDefaultPrimary>,
  Simplify<BigNumbersSliceSliceDefaultItem>
>;

/**
 * Slice variation for *BigNumbersSlice*
 */
type BigNumbersSliceSliceVariation = BigNumbersSliceSliceDefault;

/**
 * BigNumbersSlice Shared Slice
 *
 * - **API ID**: `big_numbers_slice`
 * - **Description**: BigNumbersSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type BigNumbersSliceSlice = prismic.SharedSlice<
  "big_numbers_slice",
  BigNumbersSliceSliceVariation
>;

/**
 * Primary content in *CasesSlice → Primary*
 */
export interface CasesSliceSliceDefaultPrimary {
  /**
   * Title field in *CasesSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cases_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *CasesSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cases_slice.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Auto Scroll Interval (s) field in *CasesSlice → Primary*
   *
   * - **Field Type**: Number
   * - **Placeholder**: 10
   * - **API ID Path**: cases_slice.primary.auto_scroll_interval
   * - **Documentation**: https://prismic.io/docs/field#number
   */
  auto_scroll_interval: prismic.NumberField;
}

/**
 * Primary content in *CasesSlice → Items*
 */
export interface CasesSliceSliceDefaultItem {
  /**
   * Image field in *CasesSlice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cases_slice.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Title field in *CasesSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cases_slice.items[].title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Text field in *CasesSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cases_slice.items[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Client field in *CasesSlice → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: cases_slice.items[].client
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  client: prismic.BooleanField;

  /**
   * LeftIconText field in *CasesSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cases_slice.items[].lefticontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  lefticontext: prismic.KeyTextField;

  /**
   * RigthIcon field in *CasesSlice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cases_slice.items[].rigthicon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  rigthicon: prismic.ImageField<never>;

  /**
   * RigthIconText field in *CasesSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cases_slice.items[].rigthicontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  rigthicontext: prismic.KeyTextField;

  /**
   * LeftIcon field in *CasesSlice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cases_slice.items[].lefticon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  lefticon: prismic.ImageField<never>;
}

/**
 * Default variation for CasesSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CasesSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CasesSliceSliceDefaultPrimary>,
  Simplify<CasesSliceSliceDefaultItem>
>;

/**
 * Slice variation for *CasesSlice*
 */
type CasesSliceSliceVariation = CasesSliceSliceDefault;

/**
 * CasesSlice Shared Slice
 *
 * - **API ID**: `cases_slice`
 * - **Description**: CasesSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CasesSliceSlice = prismic.SharedSlice<
  "cases_slice",
  CasesSliceSliceVariation
>;

/**
 * Primary content in *ContatoSlice → Primary*
 */
export interface ContatoSliceDefaultPrimary {
  /**
   * Descrição field in *ContatoSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contato.primary.descricao
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao: prismic.KeyTextField;
}

/**
 * Primary content in *ContatoSlice → Items*
 */
export interface ContatoSliceDefaultItem {
  /**
   * Título field in *ContatoSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contato.items[].titulo
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  titulo: prismic.KeyTextField;

  /**
   * Cor field in *ContatoSlice → Items*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: contato.items[].cor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cor: prismic.ColorField;
}

/**
 * Default variation for ContatoSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContatoSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContatoSliceDefaultPrimary>,
  Simplify<ContatoSliceDefaultItem>
>;

/**
 * Slice variation for *ContatoSlice*
 */
type ContatoSliceVariation = ContatoSliceDefault;

/**
 * ContatoSlice Shared Slice
 *
 * - **API ID**: `contato`
 * - **Description**: Contato
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContatoSlice = prismic.SharedSlice<
  "contato",
  ContatoSliceVariation
>;

/**
 * Primary content in *FeaturesSlice → Primary*
 */
export interface FeaturesSliceSliceDefaultPrimary {
  /**
   * Main Title field in *FeaturesSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features_slice.primary.main_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_title: prismic.KeyTextField;

  /**
   * Right text field in *FeaturesSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features_slice.primary.right_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  right_text: prismic.KeyTextField;
}

/**
 * Primary content in *FeaturesSlice → Items*
 */
export interface FeaturesSliceSliceDefaultItem {
  /**
   * Icon field in *FeaturesSlice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: features_slice.items[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * CardTitle field in *FeaturesSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features_slice.items[].card_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  card_title: prismic.KeyTextField;

  /**
   * Content field in *FeaturesSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: features_slice.items[].content
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  content: prismic.KeyTextField;
}

/**
 * Default variation for FeaturesSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturesSliceSliceDefaultPrimary>,
  Simplify<FeaturesSliceSliceDefaultItem>
>;

/**
 * Slice variation for *FeaturesSlice*
 */
type FeaturesSliceSliceVariation = FeaturesSliceSliceDefault;

/**
 * FeaturesSlice Shared Slice
 *
 * - **API ID**: `features_slice`
 * - **Description**: FeaturesSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturesSliceSlice = prismic.SharedSlice<
  "features_slice",
  FeaturesSliceSliceVariation
>;

/**
 * Primary content in *PartnersSlice → Primary*
 */
export interface PartnersSliceSliceDefaultPrimary {
  /**
   * Title field in *PartnersSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: partners_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;
}

/**
 * Primary content in *PartnersSlice → Items*
 */
export interface PartnersSliceSliceDefaultItem {
  /**
   * Logo field in *PartnersSlice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: partners_slice.items[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;
}

/**
 * Default variation for PartnersSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnersSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PartnersSliceSliceDefaultPrimary>,
  Simplify<PartnersSliceSliceDefaultItem>
>;

/**
 * Slice variation for *PartnersSlice*
 */
type PartnersSliceSliceVariation = PartnersSliceSliceDefault;

/**
 * PartnersSlice Shared Slice
 *
 * - **API ID**: `partners_slice`
 * - **Description**: PartnersSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PartnersSliceSlice = prismic.SharedSlice<
  "partners_slice",
  PartnersSliceSliceVariation
>;

/**
 * Primary content in *RecentsPostsAndCategories → Primary*
 */
export interface RecentsPostsAndCategoriesSliceDefaultPrimary {
  /**
   * Main TItle field in *RecentsPostsAndCategories → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recents_posts_and_categories.primary.main_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  main_title: prismic.KeyTextField;

  /**
   * See all text field in *RecentsPostsAndCategories → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: recents_posts_and_categories.primary.see_all_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  see_all_text: prismic.KeyTextField;
}

/**
 * Default variation for RecentsPostsAndCategories Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecentsPostsAndCategoriesSliceDefault =
  prismic.SharedSliceVariation<
    "default",
    Simplify<RecentsPostsAndCategoriesSliceDefaultPrimary>,
    never
  >;

/**
 * Slice variation for *RecentsPostsAndCategories*
 */
type RecentsPostsAndCategoriesSliceVariation =
  RecentsPostsAndCategoriesSliceDefault;

/**
 * RecentsPostsAndCategories Shared Slice
 *
 * - **API ID**: `recents_posts_and_categories`
 * - **Description**: RecentsPostsAndCategories
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RecentsPostsAndCategoriesSlice = prismic.SharedSlice<
  "recents_posts_and_categories",
  RecentsPostsAndCategoriesSliceVariation
>;

/**
 * Default variation for Teste Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TesteSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  never
>;

/**
 * Slice variation for *Teste*
 */
type TesteSliceVariation = TesteSliceDefault;

/**
 * Teste Shared Slice
 *
 * - **API ID**: `teste`
 * - **Description**: Teste
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type TesteSlice = prismic.SharedSlice<"teste", TesteSliceVariation>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BannerDocument,
      BannerDocumentData,
      BannerDocumentDataSlicesSlice,
      BlogDocument,
      BlogDocumentData,
      BlogDocumentDataSlicesSlice,
      CategoryDocument,
      CategoryDocumentData,
      FaqDocument,
      FaqDocumentData,
      FaqDocumentDataItemItem,
      FaqDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataLinksItem,
      FooterDocumentDataLabelsContatoItem,
      FooterDocumentDataBotoesContatoItem,
      FooterDocumentDataRedesSociaisItem,
      FooterDocumentDataSlicesSlice,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataLinksItem,
      HeaderDocumentDataSlicesSlice,
      LandingPageDocument,
      LandingPageDocumentData,
      LandingPageDocumentDataSlicesSlice,
      AllDocumentTypes,
      BigNumbersSliceSlice,
      BigNumbersSliceSliceDefaultPrimary,
      BigNumbersSliceSliceDefaultItem,
      BigNumbersSliceSliceVariation,
      BigNumbersSliceSliceDefault,
      CasesSliceSlice,
      CasesSliceSliceDefaultPrimary,
      CasesSliceSliceDefaultItem,
      CasesSliceSliceVariation,
      CasesSliceSliceDefault,
      ContatoSlice,
      ContatoSliceDefaultPrimary,
      ContatoSliceDefaultItem,
      ContatoSliceVariation,
      ContatoSliceDefault,
      FeaturesSliceSlice,
      FeaturesSliceSliceDefaultPrimary,
      FeaturesSliceSliceDefaultItem,
      FeaturesSliceSliceVariation,
      FeaturesSliceSliceDefault,
      PartnersSliceSlice,
      PartnersSliceSliceDefaultPrimary,
      PartnersSliceSliceDefaultItem,
      PartnersSliceSliceVariation,
      PartnersSliceSliceDefault,
      RecentsPostsAndCategoriesSlice,
      RecentsPostsAndCategoriesSliceDefaultPrimary,
      RecentsPostsAndCategoriesSliceVariation,
      RecentsPostsAndCategoriesSliceDefault,
      TesteSlice,
      TesteSliceVariation,
      TesteSliceDefault,
    };
  }
}

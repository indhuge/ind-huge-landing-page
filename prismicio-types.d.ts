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

/**
 * Item in *Contato → Titulo*
 */
export interface ContatoDocumentDataTituloItem {
  /**
   * Texto field in *Contato → Titulo*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contato.titulo[].texto
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  texto: prismic.KeyTextField;

  /**
   * Cor field in *Contato → Titulo*
   *
   * - **Field Type**: Color
   * - **Placeholder**: FFFFFF
   * - **API ID Path**: contato.titulo[].cor
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  cor: prismic.ColorField;
}

type ContatoDocumentDataSlicesSlice = never;

/**
 * Content for Contato documents
 */
interface ContatoDocumentData {
  /**
   * Titulo field in *Contato*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: contato.titulo[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  titulo: prismic.GroupField<Simplify<ContatoDocumentDataTituloItem>>;

  /**
   * Descrição field in *Contato*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contato.descricao
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  descricao: prismic.KeyTextField;

  /**
   * Slice Zone field in *Contato*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: contato.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<ContatoDocumentDataSlicesSlice> /**
   * Meta Description field in *Contato*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: contato.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Contato*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: contato.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Contato*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: contato.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Contato document from Prismic
 *
 * - **API ID**: `contato`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ContatoDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ContatoDocumentData>,
    "contato",
    Lang
  >;

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

type LandingPageDocumentDataSlicesSlice = FeaturesSliceSlice;

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
  | ContatoDocument
  | FooterDocument
  | HeaderDocument
  | LandingPageDocument;

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
      ContatoDocument,
      ContatoDocumentData,
      ContatoDocumentDataTituloItem,
      ContatoDocumentDataSlicesSlice,
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
      FeaturesSliceSlice,
      FeaturesSliceSliceDefaultPrimary,
      FeaturesSliceSliceDefaultItem,
      FeaturesSliceSliceVariation,
      FeaturesSliceSliceDefault,
      TesteSlice,
      TesteSliceVariation,
      TesteSliceDefault,
    };
  }
}

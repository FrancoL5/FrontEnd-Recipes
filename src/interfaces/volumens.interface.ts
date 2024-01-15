export interface Volumens {
    kind:       string;
    totalItems: number;
    items:      Item[];
}

export interface Item {
    kind:       string;
    id:         string;
    etag:       string;
    selfLink:   string;
    volumeInfo: VolumeInfo;
    saleInfo:   SaleInfo;
    accessInfo: AccessInfo;
    marked?: boolean
    searchInfo: SearchInfo;
}

export interface AccessInfo {
    country:                string;
    viewability:            string;
    embeddable:             boolean;
    publicDomain:           boolean;
    textToSpeechPermission: string;
    epub:                   IsAvailable;
    pdf:                    IsAvailable;
    webReaderLink:          string;
    accessViewStatus:       string;
    quoteSharingAllowed:    boolean;
}

export interface IsAvailable {
    isAvailable: boolean;
    acsTokenLink?: string;
}

export interface SaleInfo {
    country:     string;
    saleability: string;
    isEbook:     boolean;
    listPrice?: {
        amount: number;
        currencyCode: string;
    };
    retailPrice?: {
        amount: number;
        currencyCode: string;
    };
    buyLink?: string;
    offers?: Offers[]
}

export interface SearchInfo {
    textSnippet: string;
}
export interface Offers {
    finskyOfferType: number;
    listPrice: {
        amountInMicros: number;
        currencyCode: string;
    };
    retailPrice: {
        amountInMicros: number;
        currencyCode: string;
    };
}
export interface VolumeInfo {
    title:               string;
    authors:             string[];
    publishedDate:       string;
    description:         string;
    publisher?:           string;
    panelizationSummary?: {
        containsEpubBubbles: boolean;
        containsImageBubbles: boolean;
    }
    industryIdentifiers: IndustryIdentifier[];
    readingModes:        ReadingModes;
    pageCount:           number;
    printType:           string;
    categories:          string[];
    averageRating?:       number;
    ratingsCount?:        number;
    maturityRating:      string;
    allowAnonLogging:    boolean;
    contentVersion:      string;
    imageLinks?:          ImageLinks;
    language:            string;
    previewLink:         string;
    infoLink:            string;
    canonicalVolumeLink: string;
}

export interface ImageLinks {
    smallThumbnail: string;
    thumbnail:      string;
}

export interface IndustryIdentifier {
    type:       string;
    identifier: string;
}

export interface ReadingModes {
    text:  boolean;
    image: boolean;
}

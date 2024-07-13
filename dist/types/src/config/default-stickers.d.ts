import { MessageDescriptor } from '@ui/i18n/message-descriptor';
export interface StickerCategory {
    name: string;
    items?: number;
    list?: string[];
    type: 'svg' | 'png';
    thumbnailUrl?: string;
    invertPreview?: boolean;
}
export declare const defaultStickers: StickerCategory[];
export declare const StickerCategoryMessages: Record<string, MessageDescriptor>;

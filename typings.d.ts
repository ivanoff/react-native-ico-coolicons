declare module 'react-native-ico-coolicons' {
    import { ReactNode } from 'react';
    import { SvgProps, AdditionalProps } from 'react-native-svg';

    type iconNames = 'accept-1' |
      'accept' |
      'advance-button' |
      'airplane-black-shape' |
      'alphabetical-order-from-a-to-z' |
      'ambulance' |
      'anchor-interface-symbol' |
      'android-logo-1' |
      'android-logo' |
      'angle-arrow-pointing-down' |
      'apple-black-shape-logo-with-a-bite-hole' |
      'arrow-angle-pointing-to-right' |
      'arrow-long-angle-pointing-right' |
      'arrow-pointing-upper-right-in-a-square' |
      'arrows-shuffle-symbol' |
      'asterisk-black-star-shape' |
      'audio-tool-for-head' |
      'baby-cradle-silhouette' |
      'back' |
      'backward-arrows-couple' |
      'barcode-square-variant' |
      'bars-interface-symbol' |
      'basketball-ball-outline' |
      'bell-black-tool-shape' |
      'bell-outline' |
      'birthday-cake-of-three-cakes' |
      'bitbucket-logo-1' |
      'bitbucket-logo' |
      'bitcoin-symbol' |
      'black-back-closed-envelope-shape' |
      'black-folder-interface-symbol' |
      'black-hand-finger-pointing-up' |
      'black-rounded-square-shape' |
      'black-square-shape' |
      'book-gross-black-shape' |
      'bookmark-black-shape' |
      'box-from-side-view' |
      'broken-link-interface-symbol-of-chain-links-with-a-slash' |
      'bug-variant-of-circular-shape-with-spots' |
      'building-shape' |
      'calendar' |
      'call-black-auricular-shape' |
      'call-symbol-of-an-auricular-in-a-square' |
      'camping-tent' |
      'camping' |
      'cardinal-points-star-of-a-circle-with-four-triangles' |
      'center-alignment-symbol' |
      'check-mark-sign' |
      'checkered-flag-on-a-pole' |
      'circle-outline-with-a-central-dot' |
      'circle-shape' |
      'circular-arrow-line' |
      'circular-arrow' |
      'circular-arrows-couple' |
      'circular-stairs-from-top-view' |
      'clapper-for-cinema-filming' |
      'clipboard-and-paper-sheet' |
      'clock-circular-outline' |
      'close-cross-sign-in-a-square-button' |
      'cloud-black-shape' |
      'code-interface-symbol-of-signs' |
      'coffee-hot-black-cup-of-rounded-shapes' |
      'commercial-label-black-shape' |
      'compass-tool-1' |
      'compass-tool' |
      'connection-interface-symbol-of-three-circles-with-lines-unions' |
      'contrast-interface-circular-symbol-half-black-half-white' |
      'control-of-rectangular-shape' |
      'credit-card-back-view' |
      'crop-interface-symbol' |
      'cross-sign' |
      'currency-symbol' |
      'daily-calendar-empty-page' |
      'delete-cross-interface-symbol' |
      'descendant-arrow-angle' |
      'diamond-ring-shape' |
      'dice-on-three-face' |
      'discapacity-wheels-chair-circular-sign' |
      'dislike-hand-symbol' |
      'dollar-bill' |
      'dollar-symbol' |
      'double-left-arrows-angles' |
      'down-arrow-1' |
      'down-arrow-black-triangular-variant-symbol' |
      'down-arrow-in-a-circle-1' |
      'down-arrow-in-a-circle-2' |
      'down-arrow-in-a-circle' |
      'down-arrow-triangle-in-a-square-of-gross-line' |
      'down-arrow' |
      'down-black-arrow' |
      'download-arrow' |
      'download-from-internet-interface-symbol' |
      'drop-shape' |
      'dropbox-logo' |
      'edit-interface-symbol-of-square-paper-with-a-pencil' |
      'euro-currency-sign' |
      'exclamation-sign-1' |
      'exclamation-sign-in-a-rhomb' |
      'exclamation-sign' |
      'eye-opened-shape-with-signal-connection-lines' |
      'facebook-letter-logo' |
      'facebook-logo' |
      'fast-forward-multimedia-control-arrows' |
      'fast-forward' |
      'female-silhouette' |
      'file-black-paper-sheet-interface-symbol' |
      'file-gross-interface-symbol' |
      'file-gross-outline-interface-symbol' |
      'file-interface-symbol' |
      'film-clapperboard' |
      'film-strip-of-cinema-symbol' |
      'fire-extinguisher-black-tool-shape' |
      'fire-gross-flame-black-symbol' |
      'fire-with-logs-cross' |
      'first-aid-kit-box-with-cross-sign' |
      'flag-black-tool-shape' |
      'flag-of-rectangle-outline-on-a-pole' |
      'flask-glass-container-with-liquid-inside' |
      'flickr-logo-variant-of-two-dots-in-a-rounded-square' |
      'floppy-disk-interface-symbol-for-save-option-button' |
      'flower-with-ribbon-tails' |
      'folder-black-shape' |
      'folder-gross-outline-shape-interface-symbol' |
      'folder-gross-symbol-for-interface' |
      'font-interface-symbol' |
      'four-circles-black-group' |
      'four-horizontal-lines-interface-symbol' |
      'four-squares-black-shapes' |
      'funnel-black-shape-interface-symbol' |
      'giftbox-black-variant-with-a-ribbon-on-top' |
      'github-logo-face' |
      'github-logo-silhouette-in-a-square' |
      'glass-black-shape-for-wine' |
      'golf-flag-and-field' |
      'google-plus-logo' |
      'google-plus-square-logo' |
      'group-interface-symbol' |
      'half-black-star-shape' |
      'hand-black-shape-pointing-left-with-one-finger' |
      'hand-finger-pointing-down-like-an-arrow' |
      'hand-finger-pointing-to-right-direction-like-an-arrow' |
      'hard-disc' |
      'heart-black-shape' |
      'heart-in-a-circle' |
      'heart-outline-shape' |
      'hide-interface-symbol' |
      'home-black-shape' |
      'hotel-building' |
      'hotel-letter-sign' |
      'html-3-logo' |
      'html-5-logotype' |
      'ice-cream-cone-black-shape' |
      'id-card-interface-rectangular-symbol' |
      'image-interface-symbol-of-a-landscape' |
      'info-letter-interface-sign' |
      'information-sign' |
      'instagram-photo-camera-symbol' |
      'interface-upload-up-arrow-symbol' |
      'italic-text-option-interface-symbol' |
      'jar-black-shape' |
      'key-shape' |
      'label-black-shape' |
      'laptop-with-empty-screen' |
      'leaf-shape' |
      'leaves-on-a-branch-silhouette' |
      'left-and-right-small-triangular-arrows-couple' |
      'left-arrow-1' |
      'left-arrow-2' |
      'left-arrow-angle-variant' |
      'left-arrow-angle' |
      'left-arrow-black-triangular-shape' |
      'left-arrow-in-a-circle-1' |
      'left-arrow-in-a-circle' |
      'left-arrow-in-rounded-shape' |
      'left-arrow-square' |
      'left-arrow-variant' |
      'left-arrow' |
      'left-quotes-sign' |
      'left-text-alignment-interface-option' |
      'legal-hammer' |
      'lemon-shape' |
      'less-zoom-sign' |
      'letter-a-sign-in-a-circle' |
      'letter-b-symbol' |
      'level-down-arrow' |
      'lightbulb-gross-outline' |
      'lightning-bolt-black-shape' |
      'like-symbol-for-interface-of-black-hand-shape-with-thumb-up' |
      'link-interface-symbol' |
      'linked-in-logo-of-two-letters' |
      'linkedin-square-logo' |
      'linux-penguin' |
      'list-1' |
      'list-interface-symbol' |
      'list' |
      'locked-padlock-security-interface-symbol' |
      'logo-of-striped-rounded-square-speech-bubble-shape' |
      'magic-wand' |
      'magnet' |
      'man-standing-black-silhouette' |
      'marker-outline' |
      'maxcdn-letter-logo' |
      'md' |
      'medical-tool-to-listen-heart-beats' |
      'megaphone-silhouette' |
      'menu-interface-symbol-of-four-horizontal-lines-with-dots' |
      'menu-interface-symbol-of-three-horizontal-straight-lines' |
      'message-black-speech-bubble-of-rectangular-shape' |
      'microphone-voice-interface-symbol' |
      'microphone-with-slash-interface-symbol-for-mute-audio' |
      'minus-sign-in-a-square-1' |
      'minus-sign-in-a-square' |
      'minus-sign' |
      'minus-straight-horizontal-line-sign' |
      'monitor' |
      'moon-shape' |
      'music-disc' |
      'music-discs' |
      'musical-disc' |
      'musical-note-black-shape' |
      'network-or-hierarchy-graphic' |
      'new-email-black-back-envelope-symbol-of-interface' |
      'numbered-list' |
      'opposite-arrows-couple' |
      'order-interface-symbol-with-down-arrow' |
      'orientation-winds-star-pointing-cardinal-points' |
      'overflowing-stacked-papers-tray' |
      'padlock-locked-black-shape' |
      'paperclip-spiral' |
      'pause' |
      'paw-black-shape' |
      'pencil-black-tool-interface-symbol' |
      'pencil-in-a-square-interface-symbol-of-gross-outline' |
      'phone-keys-black-nine-squares' |
      'phone-shape' |
      'photo-camera-interface-symbol-1' |
      'photo-camera-interface-symbol' |
      'photo-camera-of-square-shape' |
      'pin-black-tool-shape' |
      'pinterest-circular-logo-symbol' |
      'pinterest-letter-logo-in-a-square' |
      'placeholder-interface-symbol-for-maps' |
      'placeholder' |
      'placeholders' |
      'play-square-button' |
      'play-triangular-button-symbol-in-a-circle' |
      'player-play-button-of-circular-shape' |
      'player-play-button-symbol' |
      'plus-sign-1' |
      'plus-sign-in-a-square-symbol-of-gross-line' |
      'plus-sign-in-a-square' |
      'plus-sign' |
      'plus-zoom-interface-symbol' |
      'power-symbol' |
      'presentation-screen-tool-outline-symbol' |
      'print-interface-symbol' |
      'prohibition-symbol-of-a-circle-with-a-slash' |
      'puzzle-piece-black-shape-of-border' |
      'qr-code-variant' |
      'question-mark-in-circular-shape' |
      'question-sign' |
      'rails' |
      'rectangles-symbol' |
      'rectangular-speech-bubble-of-chat' |
      'recycle-bin' |
      'renren-china-social-network-logo' |
      'restaurant-interface-symbol-of-fork-and-knife-couple' |
      'rewind-button' |
      'right-arrow-angle-and-horizontal-down-line-code-signs' |
      'right-arrow-angle-inside-a-square' |
      'right-arrow-angle-of-two-shapes' |
      'right-arrow-angle' |
      'right-arrow-black-shape' |
      'right-arrow-black-triangle-1' |
      'right-arrow-black-triangle' |
      'right-arrow-direction' |
      'right-arrow-for-forward-button-gross-symbol' |
      'right-arrow-in-a-circle-1' |
      'right-arrow-in-a-circle' |
      'right-arrow-symbol' |
      'right-external-arrow-of-a-square' |
      'right-long-black-arrow' |
      'right-quotes-symbol' |
      'rounded-square-corners-outline' |
      'rss-feed-suscription-button-symbol-for-interface' |
      'rss-feeds-symbol-in-a-rounded-square' |
      'ruble-currency-sign' |
      'sad-emoticon-face' |
      'serious-emoticon-face' |
      'shield-shape-outline' |
      'shopping-cart-black-silhouette-rounded-variant' |
      'sign-of-lines' |
      'sign' |
      'skype-logo' |
      'small-truck-black-side-view-silhouette' |
      'smiling-face' |
      'sort-by-reverse-alphabet-order-interface-symbol' |
      'sort-descending-interface-down-arrow-symbol-with-horizontal-text-lines' |
      'sort-interface-symbol-of-down-arrow-with-numbers' |
      'sort-numerically-down-interface-symbol' |
      'space-ship' |
      'speaker-black-tool-shape-interface-symbol' |
      'speaker-interface-audio-symbol' |
      'speaker' |
      'speech-bubble-couple-of-black-rectangular-shapes' |
      'speech-bubbles-interface-chat-symbol' |
      'speedometer' |
      'square-outline-shape' |
      'square-outline-with-up-arrow' |
      'square-outline' |
      'square-with-two-rectangles-inside' |
      'star-black-shape-favourite-interface-symbol' |
      'star-gross-outline' |
      'star-on-vip-card' |
      'star-shape-symbol-with-half-black-and-half-white' |
      'status-interface-symbol' |
      'strikethrough-text-option-interface-symbol-1' |
      'strikethrough-text-option-interface-symbol' |
      'subscript-interface-option-symbol' |
      'suitcase-black-shape-1' |
      'suitcase-black-shape' |
      'sun-black-shape' |
      'superscript-symbol' |
      'table-tennis-racquet-or-rattle-musical-instrument-black-silhouette-shape' |
      'tablet-tool-variant' |
      'tag-black-tool-shape' |
      'target-concentric-circles-symbol' |
      'targeting' |
      'text-alignment-to-right' |
      'text-height-format-interface-option-symbol' |
      'text-option-interface-symbol-1' |
      'text-option-interface-symbol' |
      'text-side-option-interface-symbol' |
      'three-aligned-squares-in-vertical-line-interface-button' |
      'three-black-squares' |
      'three-gears-interface-symbol-for-settings' |
      'three-rectangles-symbol' |
      'three-squares-line' |
      'thumb-down-symbol' |
      'thumb-up-gross-line-symbol' |
      'train-travelling-on-railroad' |
      'tray-interface-symbol' |
      'triangular-black-arrow-pointing-down' |
      'triangular-up-arrow' |
      'trophy-black-side-view-silhouette' |
      'tumblr-letter-logo' |
      'twitter-bird-logo-shape-in-a-square' |
      'twitter-black-shape' |
      'twitter-letter-logo-symbol-in-a-square' |
      'two-arrows-in-angle-pointing-down' |
      'two-arrows' |
      'two-black-paper-sheets-symbol' |
      'two-columns-layout' |
      'two-opposite-arrows' |
      'two-straight-arrows' |
      'umbrella-black-shape' |
      'underline-text-option-interface-symbol' |
      'unlocked-padlock-symbol' |
      'unlocked-padlock' |
      'up-and-down-arrows' |
      'up-and-down-small-triangular-arrows' |
      'up-arrow-angle-1' |
      'up-arrow-angle' |
      'up-arrow-in-a-circle-1' |
      'up-arrow-in-a-circle' |
      'up-arrow-in-circular-shape' |
      'up-arrow-inside-a-gross-circle' |
      'up-arrow-triangle-in-a-square-gross-outline' |
      'up-arrow-triangle' |
      'up-arrow' |
      'up-arrows-angles-couple' |
      'up-level-arrow' |
      'up-long-arrow' |
      'up-triangular-arrow' |
      'upload-to-the-cloud-interface-symbol' |
      'upper-right-arrow-black-symbol' |
      'user-black-shape' |
      'user-image-on-phone-screen-in-horizontal-position' |
      'verification-sign-in-a-circle' |
      'verification-symbol-in-a-square-box' |
      'verification-symbol' |
      'verify' |
      'video-camera' |
      'view-eye-interface-symbol' |
      'vimeo-letter-logo-in-a-square' |
      'vk-logo-of-social-network' |
      'war-airplane-bottom-view-black-shape' |
      'wedding-rings-couple' |
      'weekly-calendar-variant' |
      'wheel-shape-variant' |
      'windows-logo' |
      'wireless-keyboard' |
      'wireless-signal-interface-status-symbol-of-bars-group' |
      'world-ball' |
      'wrench-black-silhouette-of-tool' |
      'xing-logo-1' |
      'xing-logo' |
      'yen-symbol' |
      'youtube-logo' |
      'youtube-rounded-square-logo';

    type iconColors = ;

    type backgroundType = 'circle' | 'rect' | 'button';

    type colorsType = Record<iconColors, string>;

    type positionType = 'top' | 'bottom' | 'right' | 'left' |
      'top_right' | 'top_left' | 'bottom_right' | 'bottom_left';

    type backgroundTypeObj = {
      type?: backgroundType;
      color?: string;
      radius?: number;
      borderRadius?: number;
    };

    type badgeTypeObj = {
      value?: number | string;
      fontSize?: string;
      position?: positionType;
      color?: string;
      colors: colorsType;
      backgroundColor?: string;
      radius?: number;
    };

    interface IconProps {
      name: iconNames;
      width?: number;
      height?: number;
      color?: string;
      colors: colorsType;
      stroke?: number;
      background?: backgroundType | backgroundTypeObj;
      badge?: number | string | badgeTypeObj;
    }

    const Icon: (props: IconProps & SvgProps & AdditionalProps) => ReactNode;

    export { iconNames };
    export default Icon;
}

// --- Fetch Font Style Function ---
function fetchFontStyle(styleName) {
    const styleMap = {
        bond: "Roboto Mono",      
        casual: "Lobster",        
        headline: "Bebas Neue",     
        typewriter: "Courier New",  
        comic: "Comic Sans MS",   
        vintage: "Caveat",       
        spooky: "Creepster",      
        scribble: "Indie Flower",   // Fun, scribbled handwriting
        elegant: "Great Vibes",     // Formal, elegant look
        codeNerd: "Source Code Pro",// Techy, programmer font
        fancy: "Dancing Script",    
        rockstar: "Rock Salt",     
        chill: "Pacifico",       
        pop: "Bangers",             // Loud and playful
        mystery: "Shadows Into Light", // Suspenseful, subtle shadow effect
        magic: "Abril Fatface",     // Dramatic, magical feel
        gothic: "UnifrakturMaguntia", // Dark, gothic-style font
        classy: "Playfair Display", // Sophisticated, classic look
        pixel: "Press Start 2P",    // Retro, pixelated look for gaming vibes
        speedy: "Anton",            // Bold, intense style for fast-paced vibe
        fairytale: "Gochi Hand",   
        funky: "Fjalla One",        // Modern, funky look
        dreamy: "Sacramento",       // Light and dreamy appearance
        wild: "Lobster",            // Bold and playful style
        retro: "Pacifico",          // Nostalgic, cursive feel
        bold: "Oswald",             // Strong, attention-grabbing
        vibrant: "Righteous",       // Bold, vibrant display
        elegant: "Allura",          // Elegant script font
        whimsical: "Pacifico"       // Fun, friendly style
    };

    if (!styleMap[styleName]) {
        console.warn(`Style "${styleName}" not available.`);
        return null;
    }

    // Dynamically load fonts using WebFont
    WebFont.load({
        google: {
            families: [styleMap[styleName]]
        }
    });

    return styleMap[styleName];
}

// --- Apply Style to Elements ---
async function applyClassyTextStyle(element, styleName) {
    const fontStyle = fetchFontStyle(styleName);

    if (fontStyle) {
        element.style.fontFamily = fontStyle;

        // Set text shadow and other styles based on the styleName
        switch (styleName) {
            case 'bond':
                element.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.4)';
                break;
            case 'casual':
                element.style.textShadow = '1px 1px 2px rgba(0, 0, 0, 0.3)';
                break;
            case 'headline':
                element.style.fontWeight = 'bold';
                element.style.textShadow = '1px 1px 1px white';
                break;
            case 'typewriter':
                element.style.textShadow = '0 0 5px rgba(0, 128, 0, 0.5)';
                break;
            case 'comic':
                element.style.textShadow = '2px 2px 2px black';
                break;
            case 'vintage':
                element.style.textShadow = '1px 1px 2px rgba(139, 69, 19, 0.5)';
                break;
            case 'spooky':
                element.style.textShadow = '3px 3px 3px black';
                break;
            case 'scribble':
                element.style.textShadow = '1px 1px 5px rgba(75, 0, 130, 0.5)';
                break;
            case 'elegant':
                element.style.fontWeight = 'bold';
                element.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.5)';
                break;
            case 'codeNerd':
                element.style.textShadow = '0 0 10px rgba(0, 128, 0, 0.5)';
                break;
            case 'fancy':
                element.style.textShadow = '2px 2px 3px rgba(255, 105, 180, 0.8)';
                break;
            case 'rockstar':
                element.style.textShadow = '1px 1px 3px rgba(255, 0, 0, 0.5)';
                break;
            case 'chill':
                element.style.textShadow = '1px 1px 2px rgba(255, 20, 147, 0.5)';
                break;
            case 'pop':
                element.style.textShadow = '2px 2px 4px rgba(128, 0, 128, 0.5)';
                break;
            case 'mystery':
                element.style.textShadow = '1px 1px 2px rgba(128, 128, 128, 0.5)';
                break;
            case 'magic':
                element.style.textShadow = '1px 1px 2px rgba(255, 215, 0, 0.5)';
                break;
            case 'gothic':
                element.style.textShadow = '2px 2px 5px rgba(0, 0, 0, 0.8)';
                break;
            case 'classy':
                element.style.textShadow = '1px 1px 3px rgba(169, 169, 169, 0.5)';
                break;
            case 'pixel':
                element.style.textShadow = '0 0 5px rgba(0, 255, 0, 0.5)';
                break;
            case 'speedy':
                element.style.textShadow = '2px 2px 4px rgba(255, 69, 0, 0.5)';
                break;
            case 'fairytale':
                element.style.textShadow = '1px 1px 3px rgba(255, 215, 0, 0.5)';
                break;
            case 'funky':
                element.style.textShadow = '1px 1px 2px rgba(255, 20, 147, 0.5)';
                break;
            case 'dreamy':
                element.style.textShadow = '1px 1px 2px rgba(135, 206, 250, 0.5)';
                break;
            case 'wild':
                element.style.textShadow = '2px 2px 4px rgba(255, 69, 0, 0.5)';
                break;
            case 'retro':
                element.style.textShadow = '1px 1px 2px rgba(255, 140, 0, 0.5)';
                break;
            case 'bold':
                element.style.color = '#000'; // Black
                element.style.fontWeight = 'bold';
                element.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.5)';
                break;
            case 'vibrant':
                element.style.color = '#FF1493'; // DeepPink
                element.style.textShadow = '1px 1px 2px rgba(255, 20, 147, 0.5)';
                break;
            case 'whimsical':
                element.style.textShadow = '1px 1px 2px rgba(255, 105, 180, 0.8)';
                break;
            default:
                element.style.textShadow = ''; // No additional styling
                break;
        }
    } else {
        console.warn(`Style "${styleName}" could not be applied.`);
    } 
}

// --- Detect ct:* Attributes and Apply Styles ---
function applyClassyTextStyles() {
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        Array.from(element.attributes).forEach(attr => {
            if (attr.name.startsWith('ct:')) {
                const styleName = attr.name.split(':')[1];
                applyClassyTextStyle(element, styleName);
            }
        });
    });
}

// Run the style application on DOMContentLoaded
document.addEventListener('DOMContentLoaded', applyClassyTextStyles);

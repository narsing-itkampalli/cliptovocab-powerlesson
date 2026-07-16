export function transparentize(hex: string, opacity: number) {
    // Remove '#' if present
    hex = hex.replace('#', '');

    // Convert shorthand hex (e.g., #abc → #aabbcc)
    if (hex.length === 3) {
        hex = hex.split('').map(c => c + c).join('');
    }

    if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
    }

    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    // Return rgba string
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

export function fadeColor(hex: string, opacity: number, background = '#ffffff') {
    // Clamp opacity
    opacity = Math.max(0, Math.min(1, opacity));

    // Remove '#' if present
    hex = hex.replace('#', '');
    background = background.replace('#', '');

    // Convert shorthand hex (e.g., #abc → #aabbcc)
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    if (background.length === 3) background = background.split('').map(c => c + c).join('');

    if (hex.length !== 6 || background.length !== 6) {
        throw new Error('Invalid HEX color.');
    }

    // Convert hex to RGB
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const br = parseInt(background.substring(0, 2), 16);
    const bg = parseInt(background.substring(2, 4), 16);
    const bb = parseInt(background.substring(4, 6), 16);

    // Blend the color with the background
    const newR = Math.round(r * opacity + br * (1 - opacity));
    const newG = Math.round(g * opacity + bg * (1 - opacity));
    const newB = Math.round(b * opacity + bb * (1 - opacity));

    return `rgb(${newR}, ${newG}, ${newB})`;
}

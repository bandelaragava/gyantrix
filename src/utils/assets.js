const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp,gif}', { eager: true });

export const getAssetUrl = (name) => {
    if (!name || name.startsWith('http')) return name;
    const fileName = name.split('/').pop();
    const path = Object.keys(images).find(key => key.endsWith(fileName));
    return path ? images[path].default : name;
};

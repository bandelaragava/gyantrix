const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg,webp,gif}', { eager: true });

export const getAssetUrl = (name) => {
    if (!name || name.startsWith('http')) return name;
    // Clean /public/ prefix if it exists, as Vite serves public folder at root
    const cleanName = name.replace(/^\/?public\//, '');
    const fileName = cleanName.split('/').pop();
    const path = Object.keys(images).find(key => key.endsWith(fileName));
    return path ? images[path].default : (cleanName.startsWith('/') ? cleanName : `/${cleanName}`);
};

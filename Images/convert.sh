#!/bin/bash
# Redimensionne toutes les images du dossier courant à 300x300
# et sauvegarde les originaux en nom-old.extension

# Vérifie qu'ImageMagick est installé
if ! command -v convert &> /dev/null; then
  echo "❌ ImageMagick n'est pas installé. Installe-le avec : sudo apt install imagemagick"
  exit 1
fi

# Taille de sortie
TARGET_SIZE="300x300"

# Boucle sur les images du dossier courant
for img in *.{png,webp}; do
  [ -e "$img" ] || continue # ignore si aucun fichier trouvé

  # Récupère le nom et l’extension
  base="${img%.*}"
  ext="${img##*.}"

  # Nouveau nom pour l’original
  old_name="${base}-old.${ext}"

  # Renomme l’image originale
  mv "$img" "$old_name"

  # Crée la nouvelle image redimensionnée avec le nom original
  convert "$old_name" -resize "$TARGET_SIZE^" -gravity center -extent "$TARGET_SIZE" -quality 85 "$img"

  echo "✅ Redimensionné : $img (original sauvegardé sous $old_name)"
done


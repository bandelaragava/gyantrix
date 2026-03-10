# from PIL import Image
import sys

def remove_background(input_path, output_path):
    # img = Image.open(input_path)
    img = img.convert("RGBA")

    # Get data
    data = img.getdata()

    new_data = []
    for item in data:
        # Check if the pixel is white or very close to white
        # item is (R, G, B, A). Assuming white background (255, 255, 255)
        # We allow a small tolerance e.g. RGB > 240
        if item[0] > 240 and item[1] > 240 and item[2] > 240:
            # Change to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)

    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_background("public/images/gy1.jpg", "public/images/gy1.png")
    print("Successfully created gy1.png with transparent background.")

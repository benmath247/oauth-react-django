from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth import get_user_model
import requests
from io import BytesIO
from django.core.files import File
import os
import random

def download_pokemon_picture():
    pokemon_id = str(random.randint(1, 151))
    image_url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+pokemon_id+'.png'
    img_response = requests.get(image_url)
    if img_response.status_code == 200:
        filename = os.path.basename("pokemon_" + pokemon_id + ".png")
        file = BytesIO(img_response.content)
        return file, filename
    return None, None

@receiver(post_save, sender=get_user_model())
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        file, filename = download_pokemon_picture()
        if file and filename:
            instance.profile_picture.save(filename, File(file))
            print(f"Profile picture saved for {instance.username}")
        else:
            print(f"Failed to download profile picture for {instance.username}")
        instance.save()
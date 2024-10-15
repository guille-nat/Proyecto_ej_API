from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from django.contrib.auth.models import User
from .serializers import UserSerializer


class TestUserAPI(APITestCase):

    def setUp(self) -> None:
        self.user = User.objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password='testpassword',
            first_name='Test',
            last_name='User'
        )
        self.url = reverse('user-list')

    def setUp(self):
        # Crea un usuario de prueba para usar en las pruebas
        self.user = User.objects.create_user(
            username='testuser',
            email='testuser@example.com',
            password='testpassword',
            first_name='Test',
            last_name='User'
        )
        self.url = reverse('user-list')

    def test_get_list_users(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        # Asegúrate de que el usuario de prueba esté en la lista
        self.assertEqual(len(response.data), 1)

    def test_create_user(self):
        data = {
            'username': 'donatello',
            'email': 'donatello@gmail.com',
            'password': 'el_mejor_amigoDelMundo',
            'first_name': 'Donatello',
            'last_name': 'Ulla'
        }
        response = self.client.post(self.url, data, format='json')
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        # Verificar que el usuario se creó en la base de datos
        # El usuario de prueba y el nuevo usuario
        self.assertEqual(User.objects.count(), 2)

    def test_update_user(self):
        # Usa el usuario de prueba creado en setUp
        new_data = {
            'email': 'donatello22@gmail.com'
        }
        # Usa el ID del usuario de prueba
        url_user = reverse('user-detail', kwargs={'pk': self.user.id})
        response = self.client.patch(url_user, new_data, format='json')
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        # Verifica si se actualizó
        self.user.refresh_from_db()
        self.assertEqual(self.user.email, 'donatello22@gmail.com')

    def test_delete_user(self):
        # Usa el ID del usuario de prueba
        url_user = reverse('user-detail', kwargs={'pk': self.user.id})
        response = self.client.delete(url_user)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        # Verifica que se eliminó el usuario
        self.assertEqual(User.objects.count(), 0)  # Ahora debería estar vacío

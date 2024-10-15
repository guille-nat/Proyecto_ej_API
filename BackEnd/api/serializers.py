from rest_framework import serializers
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = (
            'id', 'username', 'email',
            'password', 'first_name', 'last_name'
        )
        read_only_fields = ('id',)

    def create(self, validated_data):
        password = validated_data.get('password')
        if not password:
            raise serializers.ValidationError(
                {"password": "Este campo es obligatorio."})

        user = User.objects.create_user(**validated_data)
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        instance = super().update(instance, validated_data)

        if password:
            instance.set_password(password)
            instance.save()

        return instance

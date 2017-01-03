# Comandos Importantes

## Generar modelos en Sailsjs
```
> sails generate model nombreModelo

```

## Generar APIs en Sailsjs
```
> sails generate api NombreAPI

```

Un Api es la fusión de un *controlador * y un modelo.

## API REST

### Modelo de usuario
Crear URL:

```
http://localhost:1337/
```

Metodo HTTP: ´post´ Datos:


```
    {
        nombre:'Cristian',
        apellido:'Santacruz´,
        correo:'santacruz-guarquila@hotmail.com'
    }

```
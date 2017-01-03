# Comandos Importantes

## Instalar sails de forma global
```
> npm install -g sails

```

## Crear un proyecto en sails
```
> sails new nombreProyecto

```

## Levantar servidor en sails
```
> sails lift

```

El sails pide opciones si no estan definidas
-1: SAFE MODE No altera la base de datos.
-2: ALTER MODE Altera la base de datos si se hizo algún cambio.
-3: DELETE MODE Borra todos los datos de la base y los vuelve a crear.


El servidor del sails se encuentra ubicado en la carpeta assets

## Generar controladores en sails
```
sails generate controller Saludo

```
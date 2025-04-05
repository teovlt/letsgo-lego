# LETSGO LEGO BACKEND

## Installation locale

1. Créez un nouveau fichier dans le répertoire `config/` et nommez-le `.env`
2. Ajoutez les informations suivantes dans le fichier `.env`:

```
PORT=5500
TOKEN_SECRET=<VOTRE_TOKEN_SECRET>
DB_PATH=mongodb://127.0.0.1:27017/letsgo-lego
CLIENT_URL=http://localhost:5173
UPLOAD_PATH=/../../frontend/public/uploads/
```

Remplacez `<VOTRE_TOKEN_SECRET>` par un token secret sécurisé pour votre application.
Si vous utilisez l'application pour de la démonstration, remplacez `CLIENT_URL` par `http://localhost:4173`

1. Installez les dépendances nécessaires en utilisant la commande `npm install` dans votre terminal.

2. Lancez l'application en utilisant la commande `npm start`

3. Assurez-vous que MongoDB est en cours d'exécution sur votre ordinateur avant de lancer l'application. Si vous ne l'avez pas installé, vous pouvez le télécharger à partir du [site officiel de MongoDB](https://www.mongodb.com/try/download/community-edition).

4. Vérifiez que l'application fonctionne correctement en vérifiant les logs de la console pour vous assurer que le serveur est en cours d'exécution sans erreur. Vous devriez voir un message indiquant que le serveur est en cours d'exécution et qu'il est connecté à la base de données.

## Installation sur le serveur

1. Créez un nouveau fichier dans le répertoire `config/` et nommez-le `.env`
2. Ajoutez les informations suivantes dans le fichier `.env`:

```
PORT=5500
TOKEN_SECRET=<VOTRE_TOKEN_SECRET>
DB_PATH=mongodb://127.0.0.1:27017/letsgo-lego
CLIENT_URL=http://localhost
UPLOAD_PATH=/../../frontend/dist/uploads/
```

Remplacez `<VOTRE_TOKEN_SECRET>` par un token secret sécurisé pour votre application.

1. Installez les dépendances nécessaires en utilisant la commande `npm install` dans votre terminal.

2. Lancez l'application en utilisant la commande `npm start`

3. Assurez-vous que MongoDB est en cours d'exécution sur le serveur en utilisant la commande `systemctl status mongod`

4. Vérifiez que l'application fonctionne correctement en vérifiant les logs de la console pour vous assurer que le serveur est en cours d'exécution sans erreur. Vous devriez voir un message indiquant que le serveur est en cours d'exécution et qu'il est connecté à la base de données.

## Tests

1. Lancez les tests unitaires en utilisant la commande `npm test`

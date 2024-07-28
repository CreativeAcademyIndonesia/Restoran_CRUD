# Langkah-langkah Instalasi

1. Update Ubuntu
   ```bash
   sudo apt update
   ```

2. Instal Node.js via NVM (Node.js Version Manager)
   Kunjungi [nvm-sh/nvm](https://github.com/nvm-sh/nvm) atau ketik:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
   ```

3. Restart Terminal
   Ketik:
   ```bash
   exit
   ```

4. Instal Node.js
   ```bash
   nvm install --lts
   ```

5. Instal NGINX
   ```bash
   sudo apt install nginx
   ```

6. Cek status NGINX web server
   ```bash
   sudo service nginx status
   ```

7. Instal MariaDB
   ```bash
   sudo apt install mariadb-server
   ```

8. Amankan instalasi MariaDB
   ```bash
   mysql_secure_installation
   ```

9. Tambahkan user root@localhost
   ```sql
   CREATE USER 'roo'@'localhost' IDENTIFIED BY 'password';
   ALTER USER 'roo'@'localhost' IDENTIFIED BY 'password';
   GRANT ALL PRIVILEGES ON *.* TO 'roo'@'localhost' WITH GRANT OPTION;
   FLUSH PRIVILEGES;
   EXIT;
   ```

10. Buat direktori aplikasi
    ```bash
    mkdir app
    cd app
    ```

11. Buat repository di GitHub dan clone repo
    ```bash
    git clone <url-repo>
    cd <nama-repo>
    ```

12. Ganti nama file .env
    ```bash
    mv oldname newName
    ```

13. Login ke MySQL dan buat database
    ```bash
    mysql -u root -p
    CREATE DATABASE nama_database;
    ```

14. Import database yang ada
    ```bash
    mysql -u root -p nama_database < path/to/database.sql
    ```

15. Instal PM2
    ```bash
    npm install pm2 -g
    ```
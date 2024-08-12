CREATE DATABASE IF NOT EXISTS project_production;
CREATE USER 'user'@'%' IDENTIFIED BY 'user_password';
GRANT ALL PRIVILEGES ON project_production.* TO 'user'@'%';
FLUSH PRIVILEGES;

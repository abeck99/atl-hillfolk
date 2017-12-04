#!/bin/bash

rm -rf /var/www/hillfolk.abeck.io/html
cp -R public /var/www/hillfolk.abeck.io/html
chown -R www-data:www-data /var/www/hillfolk.abeck.io/html
chmod -R 755 /var/www


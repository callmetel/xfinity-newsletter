<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'xfinity_newsletter');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'FEn3Yw8gQ,zf[P=o5w9qXk91Y/?dNA]k{MO)H4:pAeWAAqAgHC*^l|B>2!JqeY7F');
define('SECURE_AUTH_KEY',  'j{M Nac.i?BItqg$+`wiO}FCF#ymRU0OdCy[a$>,IYiw`V2E U5(T0 W%8 X)8<7');
define('LOGGED_IN_KEY',    '$g)cY97&3^:Uw4xdr0gjMKuEc&vQme[Wc}A7(8Nikk-rQ`#qRQH?m{!/>_qV#UpK');
define('NONCE_KEY',        '1sGn1vBRNADk|6reJ%-;up=bd1)sht13M~B#lDu-1]F(Zzx;E+[OuIw`#f{@u@Dq');
define('AUTH_SALT',        '@$~V;HO:<gat+pCpEw}XQ9z1E6Fe`UiBwg`q@N:BLX>.SDAK;LN!lYbR%+Ks9T1=');
define('SECURE_AUTH_SALT', 'oQfFT ?,[EnSK/l#|.^~(S0JK597+7ET;tdmo901(Z?fw ]GHu]/}u(MD@&/Wt|7');
define('LOGGED_IN_SALT',   'S8ibgO.`7eZIxzsE&%6*E?rx*KWPS6!GoOmnZ<CJ_^_eE}4,}pgP}bWU!Ky~%=sw');
define('NONCE_SALT',       'y{`oz%(nA7_&96rh}yZr-] m]_=JsP/zhY{ZV;d#1sKZYEF]*08}v4Gj[JzA^5z,');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

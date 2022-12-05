<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'ecometriawp' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'fabiopasilva1' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', 'K2108f84||' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '?U^hC1xMHN-*)6 -8kz4jbHQe.CaY~p87Ekz:$CzSor|8Ht|}EtwB(x~lfRD/ci_' );
define( 'SECURE_AUTH_KEY',  'UYw3MqQtQ~rIEFZE?gvoyw}X$E>]svhhIraEgHn 5m1XjzIhYi}O5zMiM*@W@j8`' );
define( 'LOGGED_IN_KEY',    ')$IM<W=wF>q%8u7f96pJTny?brT{XVHs=_B9D$F6np>s6 :6C_s;b`?$}fZ@NuM+' );
define( 'NONCE_KEY',        'I0lPXSUe1p+ayDqC)8]Sz:qM+R>L7x(QFp,h1/LjEqQYgW/.L[)T](Qmg%~1[aP[' );
define( 'AUTH_SALT',        ']M@sNb*`Sc>^b d#I6ov9|%i}ccz$VQ1~SR*r&(}+D&(B*o_dj^>xD|nr6O>W?4=' );
define( 'SECURE_AUTH_SALT', '0(2F~%G05WI$;/@@zJV-/=T.2`:,oxC#-`qVrltUEZFwc5/3iA_!rAgA0d&C)Uya' );
define( 'LOGGED_IN_SALT',   'SlYM1RUAh$V/2&TT?lxSO9(J5(!<3J+DEED2cgfnp+r,WE/%keG/k?Ab0!$E#FZw' );
define( 'NONCE_SALT',       '-+C<PO `HoOX~coDYYOFzS*2$B;PCUL?19cc~v]k8G/cFb4W]k5H>DjU0i`}JQ6w' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';

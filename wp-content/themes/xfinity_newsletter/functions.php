<?php

//Making jQuery Google API
function modify_jquery() {
  if (!is_admin()) {
    // comment out the next two lines to load the local copy of jQuery
    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js', false, '3.1.1');
    wp_enqueue_script('jquery');
  }
}
add_action('init', 'modify_jquery');

function xfinitynewsletter_script_enqueue() {
  wp_enqueue_style( 'customstyle', get_template_directory_uri() . '/app/css/app.css' , array(), '1.0.0', 'all' );
  wp_enqueue_script( 'customjs', get_template_directory_uri() . '/app/js/lib/script.js' , array(), null, true );
}

add_action( 'wp_enqueue_scripts' , 'xfinitynewsletter_script_enqueue');

// Let's hook in our function with the javascript files with the wp_enqueue_scripts hook 

// Register some javascript files, because we love javascript files. Enqueue a couple as well 
function xfinitynewsletter_load_javascript_files() {
  // wp_register_script( 'submit', get_template_directory_uri() . '/app/js/lib/submit.js', array(), '1.0.0', true );
  wp_register_script( 'gsap',('https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js'), array('jquery'), '1.19.0', true );
  wp_register_script( 'smoothscroll',('https://cdnjs.cloudflare.com/ajax/libs/jquery-smooth-scroll/2.1.2/jquery.smooth-scroll.min.js'), array('jquery'), '3.1.13', true );
  wp_register_script( 'ScrollToPlugin', ('http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js'), array('jquery'), '2.0.5', true );
  wp_register_script( 'scrollmagic', ('https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js'), array('jquery'), '2.0.5', true );
  wp_register_script( 'scrollmagic_gsap', ('https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js'), array('jquery'), '2.0.5', true );
  wp_register_script( 'functions', get_template_directory_uri() . '/app/js/lib/function.js' , array(), null, true );
  // wp_enqueue_script( 'submit' );
  wp_enqueue_script( 'gsap' );
  wp_enqueue_script( 'smoothscroll' );
  wp_enqueue_script( 'ScrollToPlugin' );
  wp_enqueue_script( 'scrollmagic' );
  wp_enqueue_script( 'scrollmagic_gsap' );
  wp_enqueue_script( 'functions' );


}
add_action( 'wp_enqueue_scripts', 'xfinitynewsletter_load_javascript_files' );

function xfinitynewsletter_theme_setup(){

  // add_theme_support('menus');

  // register_nav_menus(array(
  //   'primary' => __('Fixed Nav', 'jgp'),
  //   'secondary' => __('Subpage Nav', 'jgp'),
  //   'store-menu' => __('Here2CoolStuff Menu', 'jgp'),
  //   'productions-menu' => __('John Graves Productions Menu', 'jgp'),
  //   'studio-menu' => __('JGP Studio Menu', 'jgp')
  //   ));
 
}

add_action( 'init', 'xfinitynewsletter_theme_setup' );

add_filter( 'body_class', function( $classes ) {
    return array_merge( $classes, array( 'initial-hide' ) );
} );

/**
 * Remove Original Wysiwyg Editor from Backend pages
 */

add_action('init', 'my_remove_editor_from_post_type');
function my_remove_editor_from_post_type() {
    remove_post_type_support( 'page', 'editor' );
}

/**
 * Remove Wyiswg Editor Toolbar
 */

add_filter( 'acf/fields/wysiwyg/toolbars' , 'my_toolbars'  );
function my_toolbars( $toolbars )
{
  // Uncomment to view format of $toolbars
  /*
  echo '< pre >';
    print_r($toolbars);
  echo '< /pre >';
  die;
  */

  // Add a new toolbar called "Very Simple"
  // - this toolbar has only 1 row of buttons
  $toolbars['Very Simple' ] = array();
  $toolbars['Very Simple' ][1] = array('bold' , 'italic' , 'underline' );

  // Edit the "Full" toolbar and remove 'code'
  // - delet from array code from http://stackoverflow.com/questions/7225070/php-array-delete-by-value-not-key
  if( ($key = array_search('code' , $toolbars['Full' ][2])) !== false )
  {
      unset( $toolbars['Full' ][2][$key] );
  }

  // remove the 'Basic' toolbar completely
  unset( $toolbars['Basic' ] );

  // return $toolbars - IMPORTANT!
  return $toolbars;
}

/**
 * Allow SVG files to be uploaded
 */

add_filter('upload_mimes', 'custom_upload_mimes');

function custom_upload_mimes ( $existing_mimes=array() ) {

  // add the file extension to the array

  $existing_mimes['svg'] = 'mime/type';

        // call the modified list of extensions

  return $existing_mimes;

}

/**
 * Advanced Custom Fields
 * [add field groups to the site]
 */







// <?php

// add_action( 'wp_enqueue_scripts', 'register_jquery' );
// function register_jquery() {
//     wp_deregister_script( 'jquery' );
//     wp_register_script( 'jquery', ( 'https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js' ), false, null, true );
//     wp_enqueue_script( 'jquery' );
// }

// function xfinitynewsletter_script_enqueue() {
//   wp_enqueue_style( 'fonts', '//fast.fonts.net/cssapi/f5903750-8000-42f7-a667-c62502d80e78.css' , array(), '1.0.0', 'all' );
// 	wp_enqueue_style( 'customstyle', get_template_directory_uri() . '/app/css/app.min.css' , array(), '1.0.0', 'all' );
//   wp_enqueue_script( 'customjs', get_template_directory_uri() . '/app/js/lib/script.js' , array(), '1.0.0', true );
// }

// add_action( 'wp_enqueue_scripts' , 'xfinitynewsletter_script_enqueue');

// // Let's hook in our function with the javascript files with the wp_enqueue_scripts hook 

// // Register some javascript files, because we love javascript files. Enqueue a couple as well 
// function xfinitynewsletter_load_javascript_files() {
//   wp_register_script( 'global_script', get_template_directory_uri() . '/app/js/lib/function.min.js', array('jquery'), '1.0.0', true );
//   wp_register_script( 'gsap', get_template_directory_uri() . 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js', array('jquery'), '1.0.0', true );
//   wp_register_script( 'mousewheel', get_template_directory_uri() . 'https://cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js', array('jquery'), '1.0.0', true );

// }
// add_action( 'wp_enqueue_scripts', 'xfinitynewsletter_load_javascript_files' );


// add_action( 'init', 'xfinitynewsletter_theme_setup' );

// /**
//  * Remove Original Wysiwyg Editor from Backend pages
//  */

// add_action('init', 'my_remove_editor_from_post_type');
// function my_remove_editor_from_post_type() {
//     remove_post_type_support( 'page', 'editor' );
// }

// /**
//  * Remove Wyiswg Editor Toolbar
//  */

// add_filter( 'acf/fields/wysiwyg/toolbars' , 'my_toolbars'  );
// function my_toolbars( $toolbars )
// {
//   // Uncomment to view format of $toolbars
//   /*
//   echo '< pre >';
//     print_r($toolbars);
//   echo '< /pre >';
//   die;
//   */

//   // Add a new toolbar called "Very Simple"
//   // - this toolbar has only 1 row of buttons
//   $toolbars['Very Simple' ] = array();
//   $toolbars['Very Simple' ][1] = array('bold' , 'italic' , 'underline' );

//   // Edit the "Full" toolbar and remove 'code'
//   // - delet from array code from http://stackoverflow.com/questions/7225070/php-array-delete-by-value-not-key
//   if( ($key = array_search('code' , $toolbars['Full' ][2])) !== false )
//   {
//       unset( $toolbars['Full' ][2][$key] );
//   }

//   // remove the 'Basic' toolbar completely
//   unset( $toolbars['Basic' ] );

//   // return $toolbars - IMPORTANT!
//   return $toolbars;
// }

// /**
//  * Allow SVG files to be uploaded
//  */

// add_filter('upload_mimes', 'custom_upload_mimes');

// function custom_upload_mimes ( $existing_mimes=array() ) {

//   // add the file extension to the array

//   $existing_mimes['svg'] = 'mime/type';

//         // call the modified list of extensions

//   return $existing_mimes;

// }

// /**
//  * Advanced Custom Fields
//  * [add field groups to the site]
//  */


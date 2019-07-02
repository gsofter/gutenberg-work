const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
console.warn( 'camcma' );
registerBlockType( 'gw-blocks/category-block', {
	title: __( 'Category Block', 'gutenberg-workshop' ),
	icon: 'smiley',
	category: 'layout',
	edit: ( { className } ) => <div className={ className }>Hello World!</div>,
	save: () => <div>Hello World!</div>,
} );
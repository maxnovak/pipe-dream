export const pipeSheet = {
	frames: {
		startDownEmpty: {
			frame: { x: 0, y: 0, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		startDownFull: {
			frame: { x: 16, y:0, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		startLeftEmpty: {
			frame: { x: 32, y: 0, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		startLeftFull: {
			frame: { x: 48, y:0, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		startTopEmpty: {
			frame: { x: 64, y: 0, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		startTopFull: {
			frame: { x: 80, y:0, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		startRightEmpty: {
			frame: { x: 96, y: 0, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		startRightFull: {
			frame: { x: 112, y:0, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		emptySquare: {
			frame: { x: 240, y:0, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		start: {
			frame: { x: 128, y:0, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		end: {
			frame: { x: 144, y:0, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		horizontalEmpty: {
			frame: { x: 0, y: 16, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		horizontalFull: {
			frame: { x: 16, y:16, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		verticalEmpty: {
			frame: { x: 32, y: 16, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		veritcalFull: {
			frame: { x: 48, y:16, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		bend1Empty: {
			frame: { x: 64, y: 16, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		bend1Full: {
			frame: { x: 80, y: 16, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		bend2Empty: {
			frame: { x: 96, y: 16, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		bend2Full: {
			frame: { x: 112, y: 16, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		bend3Empty: {
			frame: { x: 128, y: 16, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		bend3Full: {
			frame: { x: 144, y: 16, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
		bend4Empty: {
			frame: { x: 160, y: 16, w: 16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 },

		},
		bend4Full: {
			frame: { x: 176, y: 16, w:16, h:16 },
			sourceSize: { w: 16, h: 16 },
			spriteSourceSize: { x: 0, y: 0, w: 16, h: 16 }
		},
	},
	meta: {
		image: 'NES-PipeDream-Pipes.png',
		format: 'RGBA8888',
		size: { w: 384, h: 528 },
		scale: '1',
	},
	animations: {
		startDownFill: ['startDownEmpty','startDownFull'],
		startLeftFill: ['startLeftEmpty', 'startLeftFull'],
		startTopFill: ['startTopEmpty', 'startTopFull'],
		startRightFill: ['startRightEmpty', 'startRightFull'],
	},		
};

export const GRID_SIZE = 10;
export const NUMBER_OF_TILES = 6;
export const PIPE_TYPES = ['horizontal', `vertical`, `bend1`, `bend2`, `bend3`, `bend4`]
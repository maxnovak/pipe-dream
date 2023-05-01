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

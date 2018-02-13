import React, { Component } from 'react';
import "./Controller.css"

class Controller extends Component {

  constructor(props) {
    super(props);
    this.bClicked = this.bClicked.bind(this);
    this.aClicked = this.aClicked.bind(this);
    this.yClicked = this.yClicked.bind(this);
    this.xClicked = this.xClicked.bind(this);
    this.upClicked = this.upClicked.bind(this);
    this.downClicked = this.downClicked.bind(this);
    this.leftClicked = this.leftClicked.bind(this);
    this.rightClicked = this.rightClicked.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);
    this.leftJoystickUp = this.leftJoystickUp.bind(this);
    this.leftJoystickDown = this.leftJoystickDown.bind(this);
    this.leftJoystickMove = this.leftJoystickMove.bind(this);
    this.rightJoystickUp = this.rightJoystickUp.bind(this);
    this.rightJoystickDown = this.rightJoystickDown.bind(this);
    this.rightJoystickMove = this.rightJoystickMove.bind(this);
    this.l1Clicked = this.l1Clicked.bind(this);
    this.r1Clicked = this.r1Clicked.bind(this);
    this.l2Clicked = this.l2Clicked.bind(this);
    this.r2Clicked = this.r2Clicked.bind(this);
    this.combinedKeys = this.combinedKeys.bind(this);

    this.lastLeftX=0;
    this.lastLeftY=0;
    this.lastRightX=0;
    this.lastRightY=0;

    this.keys = {};

    this.state = {
      aPressed: false,
      bPressed: false,
      yPressed: false,
      xPressed: false,
      upPressed:false,
      downPressed:false,
      leftPressed:false,
      rightPressed:false,
      l1Pressed:false,
      r1Pressed:false,
      l2Pressed:false,
      r2Pressed:false,
      aHovered: false,
      bHovered: false,
      yHovered: false,
      xHovered: false,
      upHovered:false,
      downHovered:false,
      leftHovered:false,
      rightHovered:false,
      l1Hovered:false,
      r1Hovered:false,
      l2Hovered:false,
      r2Hovered:false,
      leftJoystickPressed:false,
      lx:0,
      ly:0,
      rightJoystickPressed:false,
      rx:0,
      ry:0
    }
  }

  bClicked(event, down) {
    if(this.props.onBClicked &&
      this.state.bPressed !== down) {
      this.setState({bPressed: down});
      this.props.onBClicked(event, down);
    }
  }

  aClicked(event, down) {
    if(this.props.onAClicked &&
      this.state.aPressed !== down) {
      this.setState({aPressed: down});
      this.props.onAClicked(event, down);
    }
  }
  yClicked(event, down){
    if(this.props.onYClicked &&
      this.state.yPressed !== down) {
      this.setState({yPressed: down});
      this.props.onYClicked(event, down);
    }
  }

  xClicked(event, down){
    if(this.props.onXClicked &&
      this.state.xPressed !== down) {
      this.setState({xPressed: down});
      this.props.onXClicked(event, down);
    }
  }

  upClicked(event, down) {
    if(this.props.onUpClicked &&
      this.state.upPressed !== down) {
      this.setState({upPressed: down});
      this.props.onUpClicked(event, down);
    }
  }

  downClicked(event, down) {
    if(this.props.onDownClicked &&
      this.state.downPressed !== down) {
      this.setState({downPressed: down});
      this.props.onDownClicked(event, down);
    }
  }

  leftClicked(event, down) {
    if(this.props.onLeftClicked &&
      this.state.leftPressed !== down) {
      this.setState({leftPressed: down});
      this.props.onLeftClicked(event, down);
    }
  }

  rightClicked(event, down) {
    if(this.props.onRightClicked &&
      this.state.rightPressed !== down) {
      this.setState({rightPressed: down});
      this.props.onRightClicked(event, down);
    }
  }

  l1Clicked(event, down) {
    if(this.props.onL1Clicked &&
      this.state.l1Pressed !== down) {
      this.setState({l1Pressed: down});
      this.props.onL1Clicked(event, down);
    }
  }

  r1Clicked(event, down) {
    if(this.props.onR1Clicked &&
      this.state.r1Pressed !== down) {
      this.setState({r1Pressed: down});
      this.props.onR1Clicked(event, down);
    }
  }

  l2Clicked(event, down) {
    if(this.props.onL2Clicked &&
      this.state.l2Pressed !== down) {
      this.setState({l2Pressed: down});
      this.props.onL2Clicked(event, down);
    }
  }

  r2Clicked(event, down) {
    if(this.props.onR2Clicked &&
      this.state.r2Pressed !== down) {
      this.setState({r2Pressed: down});
      this.props.onR2Clicked(event, down);
    }
  }

  _handleKeyDown (e) {
    this._handleKey(e, true);
  }

  _handleKeyUp (e) {
    this._handleKey(e, false);
  }

  _handleKey(e, down) {
    e.preventDefault();
    switch( e.key ) {
        case 'd':
            this.leftClicked(e, down);
            break;
        case 'r':
            this.upClicked(e, down);
            break;
        case 'f':
            this.downClicked(e, down);
            break;
        case 'g':
            this.rightClicked(e, down);
            break;
        case 'z':
            this.aClicked(e, down);
            break;
        case 'x':
            this.bClicked(e, down);
            break;
        case 'a':
            this.xClicked(e, down);
            break;
        case 's':
            this.yClicked(e, down);
            break;
        case 'q':
            this.l1Clicked(e, down);
            break;
        case 'w':
            this.r1Clicked(e, down);
            break;
        case '1':
            this.l2Clicked(e, down);
            break;
        case '2':
            this.r2Clicked(e, down);
            break;
        default:
            this.combinedKeys(e, down);
            break;
    }
  }

  combinedKeys(e, down) {
    if(e.key === 'ArrowUp'    ||
       e.key === 'ArrowDown'  ||
       e.key === 'ArrowLeft'  ||
       e.key === 'ArrowRight') {
       this.keys[e.key] = down;
       const event = {screenX:0, screenY:0};
       if(this.keys['ArrowUp']) {
         event.screenY = -50;
         down = true;
       }
       if(this.keys['ArrowDown']) {
         event.screenY = 50;
         down = true;
       }
       if(this.keys['ArrowLeft']) {
         event.screenX = -50;
         down = true;
       }
       if(this.keys['ArrowRight']) {
         event.screenX = 50;
         down = true;
       }
       this.lastLeftX = 0;
       this.lastLeftY = 0;
       if(down) {
         this.setState({leftJoystickPressed: true});
         this.leftJoystickMove(event);
       } else {
         this.leftJoystickMove(event);
         this.setState({leftJoystickPressed: false});
       }
    } else if(e.key === 'i' ||
       e.key === 'k'  ||
       e.key === 'j'  ||
       e.key === 'l') {
       this.keys[e.key] = down;
       const event = {screenX:0, screenY:0};
       if(this.keys['i']) {
         event.screenY = -50;
         down = true;
       }
       if(this.keys['k']) {
         event.screenY = 50;
         down = true;
       }
       if(this.keys['j']) {
         event.screenX = -50;
         down = true;
       }
       if(this.keys['l']) {
         event.screenX = 50;
         down = true;
       }
       this.lastLeftX = 0;
       this.lastLeftY = 0;
       if(down) {
         this.setState({rightJoystickPressed: true});
         this.rightJoystickMove(event);
       } else {
         this.rightJoystickMove(event);
         this.setState({rightJoystickPressed: false});
       }
    }
  }

  leftJoystickDown(event){
    this.lastLeftX = event.screenX;
    this.lastLeftY = event.screenY;
    if(this.props.onLeftJoyStick &&
      (this.state.lx !== 0 || this.state.ly !== 0 || this.state.leftJoystickPressed !== true )) {
      this.setState({lx: 0, ly:0, leftJoystickPressed:true});
      this.props.onLeftJoyStick(0, 0, true);
    }
  }

  leftJoystickUp(){
    if(this.props.onLeftJoyStick &&
      (this.state.lx !== 0 || this.state.ly !== 0 || this.state.leftJoystickPressed !== false )) {
      this.setState({lx: 0, ly:0, leftJoystickPressed:false});
      this.props.onLeftJoyStick(0, 0);
    }
  }
  leftJoystickMove(event) {
    if(this.state.leftJoystickPressed) {
      var dx = (this.lastLeftX-event.screenX);
      var dy = (this.lastLeftY-event.screenY);
      if(dx*dx + dy*dy > 50*50){
         var ratio= (50 / Math.sqrt(dx*dx+dy*dy));
         dx *= ratio;
         dy *= ratio;
      }
      dx = Math.round(dx);
      dy = Math.round(dy);
      if(this.props.onLeftJoyStick  &&
        (this.state.lx !== -dx || this.state.ly !== -dy)) {
        this.setState({lx: -dx, ly: -dy});
        this.props.onLeftJoyStick(2*this.state.lx, 2*this.state.ly, this.state.leftJoystickPressed);
      }
    }
  }


  rightJoystickDown(event){
    this.lastRightX = event.screenX;
    this.lastRightY = event.screenY;
    if(this.props.onRightJoyStick &&
      (this.state.rx !== 0 || this.state.ry !== 0 || this.state.rightJoystickPressed !== true )) {
        this.setState({rx: 0, ry:0, rightJoystickPressed:true});
      this.props.onRightJoyStick(0, 0, true);
    }
  }

  rightJoystickUp(){
    if(this.props.onRightJoyStick &&
      (this.state.rx !== 0 || this.state.ry !== 0 || this.state.rightJoystickPressed !== false )) {
      this.setState({rx: 0, ry:0, rightJoystickPressed:false});
      this.props.onRightJoyStick(0, 0);
    }
  }
  rightJoystickMove(event) {
    if(this.state.rightJoystickPressed) {
      var dx = (this.lastRightX-event.screenX);
      var dy = (this.lastRightY-event.screenY);
      if(dx*dx + dy*dy > 50*50){
         var ratio= (50 / Math.sqrt(dx*dx+dy*dy));
         dx *= ratio;
         dy *= ratio;
      }
      dx = Math.round(dx);
      dy = Math.round(dy);
      if(this.props.onRightJoyStick &&
        (this.state.rx !== -dx || this.state.ry !== -dy)) {
        this.setState({rx: -dx, ry: -dy});
        this.props.onRightJoyStick(-2*this.state.rx, -2*this.state.ry, this.state.rightJoystickPressed);
      }
    }
  }
  componentWillMount(){
      document.addEventListener("keydown", this._handleKeyDown.bind(this));
      document.addEventListener("keyup", this._handleKeyUp.bind(this));
  }

  componentWillUnmount() {
      document.removeEventListener("keydown", this._handleKeyDown.bind(this));
      document.removeEventListener("keyup", this._handleKeyUp.bind(this));
  }

  render() {
    return (
    <div className="center" onContextMenu={(e) => e.preventDefault()}>
    <div className="full-width">
      <svg className="svg-fit" id="left" viewBox="0 0 384.53 979.43">
         <title>BLUEJOYCON</title>
         <path id="LEFT_SBDATA" d="M896,50.53C832.94,50.53,780.52,97,770,158.24H1152V50.53Z" transform="translate(-767.99 -50.03)" fill={this.state.l2Pressed? "#FF7F50" : "#1b75bc"} stroke="#231f20" strokeMiterlimit="10" />
         <path id="BL" d="M768,179V901.47a128,128,0,0,0,128,128h256V156.68H769.93A128.78,128.78,0,0,0,768,179Z" transform="translate(-767.99 -50.03)" fill="#00aeef" />
         <circle id="UPB_D" cx="204.67" cy="582.04" r="32" fill={this.state.upPressed? "#FF7F50" : "#414042"} stroke="#231f20" strokeMiterlimit="10" />
         <circle id="DOWNB_D" cx="972.66" cy="800.07" r="32" transform="matrix(0.06, -1, 1, 0.06, -655.46, 1670.02)" fill={this.state.downPressed? "#FF7F50" : "#414042"} stroke="#231f20" strokeMiterlimit="10" />
         <circle id="RIGHTB_D" cx="288.67" cy="668.04" r="32" fill={this.state.rightPressed? "#FF7F50" : "#414042"} stroke="#231f20" strokeMiterlimit="10" />
         <circle id="LEFTB_D" cx="122.67" cy="668.04" r="32" fill={this.state.leftPressed? "#FF7F50" : "#414042"} stroke="#231f20" strokeMiterlimit="10" />
         <circle id="LTS_BASE_BOUND" data-name="LTS BASE" cx="205.37" cy="356.96" r="170" fill="#00658a"/>
         <circle id="LTS_BASE" data-name="LTS BASE" cx="205.37" cy="356.96" r="130" fill="#58595b" stroke="#231f20" strokeMiterlimit="10" />
         <circle id="LTS_B" data-name="LTS B" cx={(this.state.lx+205.37)+""} cy={(this.state.ly+356.96)+""} r="80" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
         <path id="LLEFT" d="M131.29,685.51,100.94,668l30.35-17.53Z" transform="translate(0)" fill={this.state.leftHovered ? "#F0E68C" :"#231f20"} />
         <text transform="translate(103 730)" fontSize="32" fill="#000" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan >(D)</tspan>
         </text>
         <path id="LUP" d="M187.6,593l17.51-30.35L222.64,593Z" transform="translate(0)" fill={this.state.upHovered ? "#F0E68C" :"#231f20"} />
         <text transform="translate(190 643)" fontSize="32" fill="#000" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan >(R)</tspan>
         </text>
         <path id="LRIGHT" d="M277.45,686V651l30.35,17.53Z" transform="translate(0)" fill={this.state.rightHovered ? "#F0E68C" :"#231f20"} />
         <text transform="translate(273 730)" fontSize="32" fill="#000" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan >(G)</tspan>
         </text>
         <path id="LDOWN" d="M223.64,737.2l-17.53,30.35L188.6,737.2Z" transform="translate(0)" fill={this.state.downHovered ? "#F0E68C" :"#231f20"} />
         <text transform="translate(190 803)" fontSize="32" fill="#000" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan >(F)</tspan>
         </text>
         <text transform="translate(180 70)" fontSize="42" fill={this.state.l2Hovered ? "#F0E68C" :"#231f20"} fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan >L2 (1)</tspan>
         </text>
         <rect id="LTDATA" x="1.94" y="106.65" width="382.08" height="73.55" fill={this.state.l1Pressed? "#FF7F50" : "#27aae1"} />
         <text transform="translate(180 160)" fontSize="42" fill={this.state.l1Hovered ? "#F0E68C" :"#231f20"} fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan >L1 (Q)</tspan>
         </text>
         <circle
           onMouseDown={()=>this.upClicked('UP', true)}
           onMouseUp={()=>this.upClicked('UP', false)}
           onMouseOver={()=>this.setState({upHovered: true})}
           onMouseOut={()=>{
             this.setState({upHovered: false});
             this.upClicked('UP', false);
           }}
           onTouchStart={()=>this.upClicked('UP', true)}
           onTouchEnd={()=>this.upClicked('UP', false)}
          id="UPB_D" data-name="UPB D" cx="204.67" cy="582.57" r="32" fill="transparent" />
         <circle
           onMouseDown={()=>this.downClicked('DOWN', true)}
           onMouseUp={()=>this.downClicked('DOWN', false)}
           onMouseOver={()=>this.setState({downHovered: true})}
           onMouseOut={()=>{
             this.setState({downHovered: false});
             this.downClicked('DOWN', false);
           }}
           onTouchStart={()=>this.downClicked('DOWN', true)}
           onTouchEnd={()=>this.downClicked('DOWN', false)}
          id="DOWNB_D" data-name="DOWNB D" cx="204.7" cy="750.64" r="32" transform="translate(-557.43 907.27) rotate(-86.36)" fill="transparent" />
         <circle
           onMouseDown={()=>this.rightClicked('RIGHT', true)}
           onMouseUp={()=>this.rightClicked('RIGHT', false)}
           onMouseOver={()=>this.setState({rightHovered: true})}
           onMouseOut={()=>{
             this.setState({rightHovered: false});
             this.rightClicked('RIGHT', false);
           }}
           onTouchStart={()=>this.rightClicked('RIGHT', true)}
           onTouchEnd={()=>this.rightClicked('RIGHT', false)}
          id="RIGHTB_D" data-name="RIGHTB D" cx="288.67" cy="668.57" r="32" fill="transparent" />
         <circle
           onMouseDown={()=>this.leftClicked('LEFT', true)}
           onMouseUp={()=>this.leftClicked('LEFT', false)}
           onMouseOver={()=>this.setState({leftHovered: true})}
           onMouseOut={()=>{
             this.setState({leftHovered: false});
             this.leftClicked('LEFT', false);
           }}
           onTouchStart={()=>this.leftClicked('LEFT', true)}
           onTouchEnd={()=>this.leftClicked('LEFT', false)}
          id="LEFTB_D" data-name="LEFTB D" cx="122.67" cy="668.57" r="32" fill="transparent" />
         <circle
           onMouseDown={(event)=>this.leftJoystickDown(event)}
           onTouchStart={(event)=>this.leftJoystickDown(event.targetTouches[0])}
           onMouseMove={(event)=>{this.leftJoystickMove(event)}}
           onTouchMove={(event)=>{
             event.preventDefault();
             this.leftJoystickMove(event.targetTouches[0])
           }}
           onMouseUp={(event)=>this.leftJoystickUp()}
           onTouchEnd={(event)=>this.leftJoystickUp()}
           onMouseOut={(event)=>{
             this.leftJoystickUp();
           }}
          id="LTS_BASE" data-name="LTS BASE" cx="205.37" cy="356.96" r="170" fill="transparent"/>
        <path
          onMouseDown={()=>this.l2Clicked('L2', true)}
          onMouseUp={()=>this.l2Clicked('L2', false)}
          onMouseOver={()=>this.setState({l2Hovered: true})}
          onMouseOut={()=>{
            this.setState({l2Hovered: false});
            this.l2Clicked('L2', false);
          }}
          onTouchStart={()=>this.l2Clicked('L2', true)}
          onTouchEnd={()=>this.l2Clicked('L2', false)}
          id="LEFT_SBDATA" d="M896,50.53C832.94,50.53,780.52,97,770,158.24H1152V50.53Z" transform="translate(-767.99 -50.03)" fill="transparent"/>
        <rect
          onMouseDown={()=>this.l1Clicked('L1', true)}
          onMouseUp={()=>this.l1Clicked('L1', false)}
          onMouseOver={()=>this.setState({l1Hovered: true})}
          onMouseOut={()=>{
            this.setState({l1Hovered: false});
            this.l1Clicked('L1', false);
          }}
          onTouchStart={()=>this.l1Clicked('L1', true)}
          onTouchEnd={()=>this.l1Clicked('L1', false)}
          id="LTDATA" x="1.94" y="106.65" width="382.08" height="73.55" fill="transparent" />
      </svg>
      <div className="view">
        {this.props.children}
      </div>
      <svg className="svg-fit" id="right" viewBox="0 0 384 978.46">
         <title>REDJOYCON</title>
         <path id="RR" d="M1023.5,1029a128,128,0,0,0,128-128V179.52a129,129,0,0,0-1.44-19.27H768.5V1029Z" transform="translate(-768 -51.02)" fill="#ee3030" stroke="#231f20" strokeMiterlimit="10" />
         <path id="RIGHT_SBDATA" d="M1024.22,51h-255V159.75h381.56A128,128,0,0,0,1024.22,51Z" transform="translate(-768 -51.02)" fill={this.state.r2Pressed? "#FF7F50" : "#be1e2d"} />
         <circle id="BBUTTON_D" cx="959" cy="461.48" r="32" transform="translate(-330.35 1338.27) rotate(-86.36)" fill={this.state.bPressed? "#FF7F50" : "#414042"} stroke="#231f20" strokeMiterlimit="10" />
         <circle id="ABUTTON_D" cx="275" cy="328.46" r="32" fill={this.state.aPressed? "#FF7F50" : "#414042"} stroke="#231f20" strokeMiterlimit="10" />
         <circle id="YBUTTON_D" cx="109" cy="328.46" r="32" fill={this.state.yPressed? "#FF7F50" : "#414042"} stroke="#231f20" strokeMiterlimit="10" />
         <circle id="XBUTTON_D" cx="191" cy="242.46" r="32" fill={this.state.xPressed? "#FF7F50" : "#414042"} stroke="#231f20" strokeMiterlimit="10" />
         <circle id="RTS_BASE_BOUND" cx="206" cy="666.07" r="170" fill="#aa0e0e"/>
         <circle id="RTS_BASE" cx="206" cy="666.07" r="130" fill="#58595b" stroke="#231f20" strokeMiterlimit="10" />
         <circle id="RTS_B" cx={(this.state.rx+206)+""} cy={(this.state.ry+666.07)+""} r="80" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
         <text transform="translate(262.73 341.33)" fontSize="42" fill={this.state.aHovered ? "#F0E68C" :"#bcbec0"}  fontFamily="MyriadPro-Regular, Myriad Pro">A</text>
         <text transform="translate(262 391)" fontSize="32" fill="#000" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan >(Z)</tspan>
         </text>
         <text transform="translate(178 424.82)" fontSize="42" fill={this.state.bHovered ? "#F0E68C" :"#bcbec0"}  fontFamily="MyriadPro-Regular, Myriad Pro">
            <tspan>B</tspan>
         </text>
         <text transform="translate(173 474)" fontSize="32" fill="#000" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan >(X)</tspan>
         </text>
         <text transform="translate(178 256.21)" fontSize="42" fill={this.state.xHovered ? "#F0E68C" :"#bcbec0"}  fontFamily="MyriadPro-Regular, Myriad Pro">
            <tspan>X</tspan>
         </text>
         <text transform="translate(175 306)" fontSize="32" fill="#000" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan>(A)</tspan>
         </text>
         <text transform="translate(90.73 343.33)" fontSize="42" fill={this.state.yHovered ? "#F0E68C" :"#bcbec0"}  fontFamily="MyriadPro-Regular, Myriad Pro">
            <tspan letterSpacing="-0.05em" />
            <tspan x="6.97" y="0">Y</tspan>
         </text>
         <text transform="translate(87 396)" fontSize="32" fill="#000" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan>(S)</tspan>
         </text>
         <text transform="translate(140 70)" fontSize="42" fill={this.state.r2Hovered ? "#F0E68C" :"#231f20"} fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan >R2 (2)</tspan>
         </text>
         <rect id="RTDATA" x="1.2" y="106.68" width="382.08" height="73.55" fill={this.state.r1Pressed? "#FF7F50" : "#ef4136"} />
         <text transform="translate(140 160)" fontSize="42" fill={this.state.r1Hovered ? "#F0E68C" :"#231f20"} fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
            <tspan >R1 (W)</tspan>
         </text>
         <circle
            onMouseDown={()=>this.bClicked('B', true)}
            onMouseUp={()=>this.bClicked('B', false)}
            onMouseOver={()=>this.setState({bHovered: true})}
            onMouseOut={()=>{
              this.setState({bHovered: false});
              this.bClicked('B', false);
            }}
            onTouchStart={()=>this.bClicked('B', true)}
            onTouchEnd={()=>this.bClicked('B', false)}
            id="BBUTTON" cx="959" cy="461.48" r="32" transform="translate(-330.35 1338.27) rotate(-86.36)" fill="transparent"/>
         <circle
           onMouseDown={()=>this.aClicked('A', true)}
           onMouseUp={()=>this.aClicked('A', false)}
           onMouseOver={()=>this.setState({aHovered: true})}
           onMouseOut={()=>{
             this.setState({aHovered: false});
             this.bClicked('A', false);
           }}
           onTouchStart={()=>this.aClicked('A', true)}
           onTouchEnd={()=>this.aClicked('A', false)}
           id="ABUTTON" data-name="ABUTTON D" cx="275" cy="328.46" r="32" fill="transparent"/>
         <circle
           onMouseDown={()=>this.yClicked('Y', true)}
           onMouseUp={()=>this.yClicked('Y', false)}
           onMouseOver={()=>this.setState({yHovered: true})}
           onMouseOut={()=>{
             this.setState({yHovered: false});
             this.yClicked('Y', false);
           }}
           onTouchStart={()=>this.yClicked('Y', true)}
           onTouchEnd={()=>this.yClicked('Y', false)}
           id="YBUTTON" data-name="YBUTTON D" cx="109" cy="328.46" r="32" fill="transparent"/>
         <circle
           onMouseDown={()=>this.xClicked('X', true)}
           onMouseUp={()=>this.xClicked('X', false)}
           onMouseOver={()=>this.setState({xHovered: true})}
           onMouseOut={()=>{
             this.setState({xHovered: false});
             this.xClicked('X', false);
           }}
           onTouchStart={()=>this.xClicked('X', true)}
           onTouchEnd={()=>this.xClicked('X', false)}
          id="XBUTTON" data-name="XBUTTON D" cx="191" cy="242.46" r="32" fill="transparent"/>
         <circle
           onMouseDown={(event)=>this.rightJoystickDown(event)}
           onTouchStart={(event)=>this.rightJoystickDown(event.targetTouches[0])}
           onMouseMove={(event)=>{this.rightJoystickMove(event)}}
           onTouchMove={(event)=>{
             event.preventDefault();
             this.rightJoystickMove(event.targetTouches[0])
           }}
           onMouseUp={(event)=>this.rightJoystickUp()}
           onTouchEnd={(event)=>this.rightJoystickUp()}
           onMouseOut={(event)=>{
             this.rightJoystickUp();
           }}
          id="RTS_BASE" data-name="RTS BASE" cx="206" cy="666.07" r="170" fill="transparent"/>
          <path
            onMouseDown={()=>this.r2Clicked('R2', true)}
            onMouseUp={()=>this.r2Clicked('R2', false)}
            onMouseOver={()=>this.setState({r2Hovered: true})}
            onMouseOut={()=>{
              this.setState({r2Hovered: false});
              this.r2Clicked('R2', false);
            }}
            onTouchStart={()=>this.r2Clicked('R2', true)}
            onTouchEnd={()=>this.r2Clicked('R2', false)}
            id="RIGHT_SBDATA" d="M1024.22,51h-255V159.75h381.56A128,128,0,0,0,1024.22,51Z" transform="translate(-768 -51.02)" fill="transparent"/>
          <rect
            onMouseDown={()=>this.r1Clicked('R1', true)}
            onMouseUp={()=>this.r1Clicked('R1', false)}
            onMouseOver={()=>this.setState({r1Hovered: true})}
            onMouseOut={()=>{
              this.setState({r1Hovered: false});
              this.l1Clicked('R1', false);
            }}
            onTouchStart={()=>this.r1Clicked('R1', true)}
            onTouchEnd={()=>this.r1Clicked('R1', false)}
            id="RTDATA" x="1.2" y="106.68" width="382.08" height="73.55" fill="transparent" />
      </svg>
      <div className="clear">
      </div>
    </div>
    </div>
    );
  }
}

export default Controller;

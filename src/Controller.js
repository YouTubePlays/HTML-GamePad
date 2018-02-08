import React, { Component } from 'react';
import "./Controller.css"

class Controller extends Component {

  constructor(props) {
    super(props);
    this.bClicked = this.bClicked.bind(this);
    this.aClicked = this.aClicked.bind(this);
    this.yClicked = this.yClicked.bind(this);
    this.xClicked = this.yClicked.bind(this);
    this.selectClicked = this.selectClicked.bind(this);
    this.startClicked = this.startClicked.bind(this);
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

    this.lastLeftX=0;
    this.lastLeftY=0;
    this.lastRightX=0;
    this.lastRightY=0;
    this.state = {
      aPressed: false,
      bPressed: false,
      yPressed: false,
      xPressed: false,
      upPressed:false,
      downPressed:false,
      leftPressed:false,
      rightPressed:false,
      aHovered: false,
      bHovered: false,
      yHovered: false,
      xHovered: false,
      upHovered:false,
      downHovered:false,
      leftHovered:false,
      rightHovered:false,
      leftJoystickPressed:false,
      lx:0,
      ly:0,
      rightJoystickPressed:false,
      rx:0,
      ry:0
    }
  }

  bClicked(event, down) {
    this.setState({bPressed: down});
    if(this.props.onBClicked) {
      this.props.onBClicked(event, down);
    }
  }

  aClicked(event, down) {
    this.setState({aPressed: down});
    if(this.props.onAClicked) {
      this.props.onAClicked(event, down);
    }
  }
  yClicked(event, down){
    this.setState({yPressed: down});
    if(this.props.onYClicked) {
      this.props.onYClicked(event, down);
    }
  }

  xClicked(event, down){
    this.setState({xPressed: down});
    if(this.props.onXClicked) {
      this.props.onXClicked(event, down);
    }
  }

  startClicked(event, down) {
    if(this.props.onStartClicked) {
      this.props.onStartClicked(event, down);
    }
  }

  selectClicked(event, down) {
    if(this.props.onSelectClicked) {
      this.props.onSelectClicked(event, down);
    }
  }

  upClicked(event, down) {
    this.setState({upPressed: down});
    if(this.props.onUpClicked) {
      this.props.onUpClicked(event, down);
    }
  }

  downClicked(event, down) {
    this.setState({downPressed: down});
    if(this.props.onDownClicked) {
      this.props.onDownClicked(event, down);
    }
  }

  leftClicked(event, down) {
    this.setState({leftPressed: down});
    if(this.props.onLeftClicked) {
      this.props.onLeftClicked(event, down);
    }
  }

  rightClicked(event, down) {
    this.setState({rightPressed: down});
    if(this.props.onRightClicked) {
      this.props.onRightClicked(event, down);
    }
  }

  _handleKeyDown (e) {
    this._handleKey(e, true);
  }

  _handleKeyUp (e) {
    this._handleKey(e, false);
  }

  _handleKey(e, down) {
    switch( e.key ) {
        case 'ArrowLeft':
            e.preventDefault();
            this.leftClicked(e, down);
            break;
        case 'ArrowUp':
            e.preventDefault();
            this.upClicked(e, down);
            break;
        case 'ArrowDown':
            e.preventDefault();
            this.downClicked(e, down);
            break;
        case 'ArrowRight':
            e.preventDefault();
            this.rightClicked(e, down);
            break;
        case 'z':
            e.preventDefault();
            this.aClicked(e, down);
            break;
        case 'x':
            e.preventDefault();
            this.bClicked(e, down);
            break;
        case 'c':
            e.preventDefault();
            this.startClicked(e, down);
            break;
        case 'v':
            e.preventDefault();
            this.selectClicked(e, down);
            break;
        default:
            break;
    }
  }

  leftJoystickDown(event){
    this.lastLeftX = event.screenX;
    this.lastLeftY = event.screenY;
    this.setState({lx: 0, ly:0, leftJoystickPressed:true});
    if(this.props.onLeftJoyStick) {
      this.props.onLeftJoyStick(0, 0, true);
    }
  }

  leftJoystickUp(){
    this.setState({lx: 0, ly:0, leftJoystickPressed:false});
    if(this.props.onLeftJoyStick) {
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
      this.setState({lx: -dx, ly: -dy});
      if(this.props.onLeftJoyStick) {
        this.props.onLeftJoyStick(this.state.lx, this.state.ly, this.state.leftJoystickPressed);
      }
    }
  }


  rightJoystickDown(event){
    this.lastRightX = event.screenX;
    this.lastRightY = event.screenY;
    this.setState({rx: 0, ry:0, rightJoystickPressed:true});
    if(this.props.onRightJoyStick) {
      this.props.onRightJoyStick(0, 0, true);
    }
  }

  rightJoystickUp(){
    this.setState({rx: 0, ry:0, rightJoystickPressed:false});
    if(this.props.onRightJoyStick) {
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
      this.setState({rx: -dx, ry: -dy});
      if(this.props.onRightJoyStick) {
        this.props.onRightJoyStick(this.state.rx, this.state.ry, this.state.rightJoystickPressed);
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
      <svg className="svg-fit" xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 1745.23 979.96">
       <title>SwitchGUI</title>
       <path id="RR" d="M1616.73,978.46a128,128,0,0,0,128-128V129a129,129,0,0,0-1.44-19.27H1361.73V978.46Z" transform="translate(0)" fill="#ee3030" stroke="#231f20" strokeMiterlimit="10" />
       <path id="RIGHT_SBDATA" data-name="RIGHT SBDATA" d="M1617.45.5h-255V109.23H1744A128,128,0,0,0,1617.45.5Z" transform="translate(0)" fill="#be1e2d" />
       <rect id="VIEWP" x="384" y="0.5" width="978.46" height="978.46" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <path id="LEFT_SBDATA" data-name="LEFT SBDATA" d="M128,1C65,1,12.53,47.53,2,108.73H384V1Z" transform="translate(0)" fill="#1b75bc" stroke="#231f20" strokeMiterlimit="10" />
       <path id="BL" d="M0,129.5V852A128,128,0,0,0,128,980H384V107.18H1.94A128.78,128.78,0,0,0,0,129.5Z" transform="translate(0)" fill="#00aeef" />
       <circle id="BBUTTON_D" data-name="BBUTTON D" cx="1552.37" cy="411.01" r="32" transform="translate(1043.63 1934.15) rotate(-86.36)" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="ABUTTON_D" data-name="ABUTTON D" cx="1636.23" cy="328.96" r="32" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="YBUTTON_D" data-name="YBUTTON D" cx="1470.23" cy="328.96" r="32" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="XBUTTON_D" data-name="XBUTTON D" cx="1552.23" cy="242.96" r="32" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="UPB_D" data-name="UPB D" cx="204.67" cy="582.57" r="32" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="DOWNB_D" data-name="DOWNB D" cx="204.7" cy="750.64" r="32" transform="translate(-557.43 907.27) rotate(-86.36)" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="RIGHTB_D" data-name="RIGHTB D" cx="288.67" cy="668.57" r="32" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="LEFTB_D" data-name="LEFTB D" cx="122.67" cy="668.57" r="32" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="RTS_BASE" data-name="RTS BASE" cx="1567.23" cy="666.57" r="130" fill="#58595b" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="RTS_B" data-name="RTS B" cx={(this.state.rx+1567.23)+""} cy={(this.state.ry+666.57)+""} r="80" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="LTS_BASE" data-name="LTS BASE" cx="205.37" cy="356.96" r="130" fill="#58595b" stroke="#231f20" strokeMiterlimit="10" />
       <circle id="LTS_B" data-name="LTS B" cx={(this.state.lx+205.37)+""} cy={(this.state.ly+356.96)+""} r="80" fill="#414042" stroke="#231f20" strokeMiterlimit="10" />
       <text transform="translate(1623.96 341.83)" fontSize="42" fill={this.state.aHovered ? "#F0E68C" :"#bcbec0"} fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">A</text>
       <g isolation="isolate">
          <text transform="translate(1532.96 425.32)" fontSize="42" fill={this.state.bHovered ? "#F0E68C" :"#bcbec0"} fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
             <tspan > B</tspan>
          </text>
       </g>
       <g isolation="isolate">
          <text transform="translate(1531.96 256.71)" fontSize="42" fill={this.state.xHovered ? "#F0E68C" :"#bcbec0"} fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">
             <tspan > X</tspan>
          </text>
       </g>
       <g isolation="isolate">
          <text transform="translate(1458.93 343.83)" fontSize="42" fill={this.state.yHovered ? "#F0E68C" :"#bcbec0"} fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">Y</text>
       </g>
       <path id="LLEFT" d="M131.29,685.51,100.94,668l30.35-17.53Z" transform="translate(0)" fill={this.state.leftHovered ? "#F0E68C" :"#231f20"} />
       <path id="LUP" d="M187.6,593l17.51-30.35L222.64,593Z" transform="translate(0)" fill={this.state.upHovered ? "#F0E68C" :"#231f20"} />
       <path id="LRIGHT" d="M277.45,686V651l30.35,17.53Z" transform="translate(0)" fill={this.state.rightHovered ? "#F0E68C" :"#231f20"} />
       <path id="LDOWN" d="M223.64,737.2l-17.53,30.35L188.6,737.2Z" transform="translate(0)" fill={this.state.downHovered ? "#F0E68C" :"#231f20"} />
       <g isolation="isolate">
          <text transform="translate(147.36 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" letterSpacing="-0.01em" isolation="isolate">L</text>
          <text transform="translate(166.6 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" />
          <text transform="translate(166.6 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">e</text>
          <text transform="translate(187.64 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" letterSpacing="0.01em" isolation="isolate">f</text>
          <text transform="translate(200.37 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" />
          <text transform="translate(200.36 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">t SBut</text>
          <text transform="translate(303.68 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" letterSpacing="0em" isolation="isolate">t</text>
          <text transform="translate(317.33 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">on</text>
       </g>
       <g isolation="isolate">
          <text transform="translate(1426.23 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" letterSpacing="0.01em" isolation="isolate">R</text>
          <text transform="translate(1449.25 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" />
          <text transform="translate(1449.25 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">ig</text>
          <text transform="translate(1482.55 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" letterSpacing="0em" isolation="isolate">h</text>
          <text transform="translate(1505.69 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">t SBut</text>
          <text transform="translate(1609.01 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" />
          <text transform="translate(1609.01 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" letterSpacing="-0.01em" isolation="isolate">t</text>
          <text transform="translate(1622.66 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" />
          <text transform="translate(1622.66 69.84)" fontSize="42" fill="#231f20" fontFamily="MyriadPro-Regular, Myriad Pro" isolation="isolate">on</text>
       </g>
       <rect id="LTDATA" x="1.94" y="107.18" width="382.08" height="73.55" fill="#64d1ff" />
       <rect id="RTDATA" x="1362.43" y="107.18" width="382.08" height="73.55" fill="#ef4136" />
       <text transform="translate(1426.23 153.65)" fontSize="42" fontFamily="MyriadPro-Regular, Myriad Pro">
          <tspan letterSpacing="0.01em">R</tspan>
          <tspan x="23.02" y="0">ig</tspan>
          <tspan x="56.32" y="0" letterSpacing="0em">h</tspan>
          <tspan x="79.46" y="0">t SBut</tspan>
          <tspan x="182.78" y="0" letterSpacing="-0.01em">t</tspan>
          <tspan x="196.43" y="0">on</tspan>
       </text>
       <text transform="translate(147.36 160.55)" fontSize="42" fontFamily="MyriadPro-Regular, Myriad Pro">
          <tspan letterSpacing="-0.01em">L</tspan>
          <tspan x="19.24" y="0">e</tspan>
          <tspan x="40.28" y="0" letterSpacing="0.01em">f</tspan>
          <tspan x="53" y="0">t</tspan>
          <tspan x="66.9" y="0" letterSpacing="-0.04em" />
          <tspan x="74.09" y="0">T But</tspan>
          <tspan x="163.67" y="0" letterSpacing="-0.01em">t</tspan>
          <tspan x="177.32" y="0">on</tspan>
       </text>
       <circle
          onMouseDown={()=>this.bClicked('B', true)}
          onMouseUp={()=>this.bClicked('B', false)}
          onMouseOver={()=>this.setState({bHovered: true})}
          onMouseOut={()=>{
            this.setState({bHovered: false});
            this.bClicked('B', false);
          }}
          id="BBUTTON" cx="1552.37" cy="411.01" r="32" transform="translate(1043.63 1934.15) rotate(-86.36)" fill="transparent"/>
       <circle
         onMouseDown={()=>this.aClicked('A', true)}
         onMouseUp={()=>this.aClicked('A', false)}
         onMouseOver={()=>this.setState({aHovered: true})}
         onMouseOut={()=>{
           this.setState({aHovered: false});
           this.bClicked('A', false);
         }}
         id="ABUTTON" data-name="ABUTTON D" cx="1636.23" cy="328.96" r="32" fill="transparent"/>
       <circle
         onMouseDown={()=>this.yClicked('Y', true)}
         onMouseUp={()=>this.yClicked('Y', false)}
         onMouseOver={()=>this.setState({yHovered: true})}
         onMouseOut={()=>{
           this.setState({yHovered: false});
           this.yClicked('Y', false);
         }}
         id="YBUTTON" data-name="YBUTTON D" cx="1470.23" cy="328.96" r="32" fill="transparent"/>
       <circle
         onMouseDown={()=>this.xClicked('X', true)}
         onMouseUp={()=>this.xClicked('X', false)}
         onMouseOver={()=>this.setState({xHovered: true})}
         onMouseOut={()=>{
           this.setState({xHovered: false});
           this.xClicked('X', false);
         }}
        id="XBUTTON" data-name="XBUTTON D" cx="1552.23" cy="242.96" r="32" fill="transparent"/>
       <circle
         onMouseDown={()=>this.upClicked('UP', true)}
         onMouseUp={()=>this.upClicked('UP', false)}
         onMouseOver={()=>this.setState({upHovered: true})}
         onMouseOut={()=>{
           this.setState({upHovered: false});
           this.upClicked('UP', false);
         }}
        id="UPB_D" data-name="UPB D" cx="204.67" cy="582.57" r="32" fill="transparent" />
       <circle
         onMouseDown={()=>this.downClicked('DOWN', true)}
         onMouseUp={()=>this.downClicked('DOWN', false)}
         onMouseOver={()=>this.setState({downHovered: true})}
         onMouseOut={()=>{
           this.setState({downHovered: false});
           this.downClicked('DOWN', false);
         }}
        id="DOWNB_D" data-name="DOWNB D" cx="204.7" cy="750.64" r="32" transform="translate(-557.43 907.27) rotate(-86.36)" fill="transparent" />
       <circle
         onMouseDown={()=>this.rightClicked('RIGHT', true)}
         onMouseUp={()=>this.rightClicked('RIGHT', false)}
         onMouseOver={()=>this.setState({rightHovered: true})}
         onMouseOut={()=>{
           this.setState({rightHovered: false});
           this.rightClicked('RIGHT', false);
         }}
        id="RIGHTB_D" data-name="RIGHTB D" cx="288.67" cy="668.57" r="32" fill="transparent" />
       <circle
         onMouseDown={()=>this.leftClicked('LEFT', true)}
         onMouseUp={()=>this.leftClicked('LEFT', false)}
         onMouseOver={()=>this.setState({leftHovered: true})}
         onMouseOut={()=>{
           this.setState({leftHovered: false});
           this.leftClicked('LEFT', false);
         }}
        id="LEFTB_D" data-name="LEFTB D" cx="122.67" cy="668.57" r="32" fill="transparent" />
       <circle id="RTS_BASE" data-name="RTS BASE" cx="1567.23" cy="666.57" r="130" fill="transparent"/>
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
        id="LTS_BASE" data-name="LTS BASE" cx="205.37" cy="356.96" r="170" fill="#00000011"/>
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
         id="RTS_BASE" data-name="RTS BASE" cx="1567.23" cy="666.57" r="170" fill="#00000011"/>
    </svg>
    );
  }
}

export default Controller;

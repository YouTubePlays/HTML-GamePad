import React, { Component } from 'react';
import "./Controller.css"

class Controller extends Component {

  constructor(props) {
    super(props);
    this.bClicked = this.bClicked.bind(this);
    this.aClicked = this.aClicked.bind(this);
    this.selectClicked = this.selectClicked.bind(this);
    this.startClicked = this.startClicked.bind(this);
    this.upClicked = this.upClicked.bind(this);
    this.downClicked = this.downClicked.bind(this);
    this.leftClicked = this.leftClicked.bind(this);
    this.rightClicked = this.rightClicked.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handleKeyUp = this._handleKeyUp.bind(this);

  }

  bClicked(event, down) {
    if(this.props.onBClicked) {
      this.props.onBClicked(event, down);
    }
  }

  aClicked(event, down) {
    if(this.props.onAClicked) {
      this.props.onAClicked(event, down);
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
    if(this.props.onUpClicked) {
      this.props.onUpClicked(event, down);
    }
  }

  downClicked(event, down) {
    if(this.props.onDownClicked) {
      this.props.onDownClicked(event, down);
    }
  }

  leftClicked(event, down) {
    if(this.props.onLeftClicked) {
      this.props.onLeftClicked(event, down);
    }
  }

  rightClicked(event, down) {
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
      <svg className="svg-fit" x="0px" y="0px" viewBox="-0.004 270.034 612.002 251.924">
      <switch>
      	<g>
      		<g>
      			<rect id="rect11983" x="15.947" y="311.988" fill="#1A1A1A" width="581.833" height="195.284"/>
      			<path id="rect12203" fill="#808080" d="M205.958,305.043h153.281c5.362,0,9.709,4.347,9.709,9.709v10.594
      				c0,5.362-4.347,9.709-9.709,9.709H205.958c-5.362,0-9.709-4.347-9.709-9.709v-10.594
      				C196.25,309.39,200.597,305.043,205.958,305.043z"/>
      			<path id="rect13178" fill="#808080" d="M205.958,488.063h153.281c5.362,0,9.709,4.347,9.709,9.709v10.594
      				c0,5.362-4.347,9.709-9.709,9.709H205.958c-5.362,0-9.709-4.347-9.709-9.709v-10.594
      				C196.25,492.409,200.597,488.063,205.958,488.063z"/>
      			<path id="rect11976" fill="#DCDCDC" d="M8.147,270.034c-4.508,0-8.152,3.644-8.152,8.152v235.621
      				c0,4.508,3.645,8.152,8.152,8.151h595.897c4.508,0,7.953-3.644,7.953-8.151V278.186c0-4.508-3.445-8.152-7.953-8.152H8.147
      				L8.147,270.034z M15.902,311.988h581.986v195.25H15.902V311.988L15.902,311.988z"/>
      			<path id="rect2235" stroke="#FFFFFF" strokeWidth="1.6523" strokeLinecap="round" d="M87.542,362.004
      				c-2.686,0-4.713,2.216-4.713,4.902v33.747H49.082c-2.686,0-4.902,2.217-4.902,4.902v27.148c0,2.686,2.216,4.901,4.902,4.901
      				h33.747v33.747c0,2.686,2.028,4.714,4.713,4.714h27.337c2.686,0,4.713-2.027,4.713-4.714v-33.747h33.747
      				c2.686,0,4.902-2.216,4.902-4.901v-27.148c0-2.686-2.216-4.902-4.902-4.902h-33.747v-33.747c0-2.686-2.028-4.902-4.713-4.902
      				H87.542z"/>
            <path id="bg" fill="#A1A1A1" d="M87.542,362.004
      				c-2.686,0-4.713,2.216-4.713,4.902v33.747H49.082c-2.686,0-4.902,2.217-4.902,4.902v27.148c0,2.686,2.216,4.901,4.902,4.901
      				h33.747v33.747c0,2.686,2.028,4.714,4.713,4.714h27.337c2.686,0,4.713-2.027,4.713-4.714v-33.747h33.747
      				c2.686,0,4.902-2.216,4.902-4.901v-27.148c0-2.686-2.216-4.902-4.902-4.902h-33.747v-33.747c0-2.686-2.028-4.902-4.713-4.902
      				H87.542z"/>
            <rect onMouseDown={()=>this.upClicked('UP', true)}
                  onMouseUp={()=>this.upClicked('UP', false)}
                  onMouseOut={()=>this.upClicked('UP', false)}
                  id="up_button" x="82" y="360" width="40" height="40" fill="transparent"/>
            <rect onMouseDown={()=>this.downClicked('DOWN', true)}
                  onMouseUp={()=>this.downClicked('DOWN', false)}
                  onMouseOut={()=>this.downClicked('DOWN', false)}
                  id="down_button" x="82" y="440" width="40" height="40" fill="transparent"/>
            <rect onMouseDown={()=>this.leftClicked('LEFT', true)}
                  onMouseUp={()=>this.leftClicked('LEFT', false)}
                  onMouseOut={()=>this.leftClicked('LEFT', false)}
                  id="left_button" x="42" y="400" width="40" height="40" fill="transparent"/>
            <rect onMouseDown={()=>this.rightClicked('LEFT', true)}
                  onMouseUp={()=>this.rightClicked('LEFT', false)}
                  onMouseOut={()=>this.rightClicked('LEFT', false)}
                  id="right_button" x="122" y="400" width="40" height="40" fill="transparent"/>
      			<path id="rect11986" fill="#808080" d="M205.958,343.667h153.281c5.362,0,9.709,4.347,9.709,9.708v10.594
      				c0,5.362-4.347,9.709-9.709,9.709H205.958c-5.362,0-9.709-4.347-9.709-9.709v-10.594
      				C196.25,348.014,200.597,343.667,205.958,343.667z"/>
      			<g id="g12011" transform="matrix(2.9042238,0,0,2.9042238,-597.29495,-994.37335)">
      				<path id="rect11997" fill="#DDDDDD" d="M343.472,484.842h20.578c0.908,0,1.643,0.736,1.643,1.643v20.578
      					c0,0.907-0.735,1.643-1.643,1.643h-20.578c-0.908,0-1.643-0.736-1.643-1.643v-20.578
      					C341.829,485.577,342.565,484.842,343.472,484.842z"/>
      				<path onMouseDown={()=>this.bClicked('B', true)}
                    onMouseUp={()=>this.bClicked('B', false)}
                    onMouseOut={()=>this.bClicked('B', false)}
                    id="path12001" fill="#FF0000" d="M363.54,496.875c0,5.402-4.379,9.78-9.78,9.78s-9.78-4.379-9.78-9.78
      					s4.379-9.78,9.78-9.78S363.54,491.473,363.54,496.875z"/>
      			</g>
      			<g id="g12007" transform="matrix(2.9042238,0,0,2.9042238,-597.29495,-994.37335)">
      				<path id="rect12003" fill="#DDDDDD" d="M370.572,484.842h20.578c0.907,0,1.643,0.736,1.643,1.643v20.578
      					c0,0.907-0.736,1.643-1.643,1.643h-20.578c-0.908,0-1.643-0.736-1.643-1.643v-20.578
      					C368.929,485.577,369.665,484.842,370.572,484.842z"/>
      				<path onMouseDown={()=>this.aClicked('A', true)}
                    onMouseUp={()=>this.aClicked('A', false)}
                    onMouseOut={()=>this.aClicked('A', false)}
                    id="path12005" fill="#FF0000" d="M390.65,496.875c0,5.402-4.379,9.78-9.78,9.78c-5.402,0-9.781-4.379-9.781-9.78
      					s4.379-9.78,9.781-9.78C386.271,487.094,390.65,491.473,390.65,496.875z"/>
      			</g>
      			<path id="rect12205" fill="#808080" d="M205.958,382.312h153.281c5.362,0,9.709,4.347,9.709,9.709v10.594
      				c0,5.362-4.347,9.709-9.709,9.709H205.958c-5.362,0-9.709-4.347-9.709-9.709v-10.594
      				C196.249,386.659,200.597,382.312,205.958,382.312z"/>
      			<path id="rect12199" fill="#DDDDDD" d="M207.071,420.454h151.087c5.976,0,10.82,4.845,10.82,10.821v35.343
      				c0,5.977-4.845,10.821-10.82,10.821H207.071c-5.977,0-10.821-4.845-10.821-10.821v-35.343
      				C196.249,425.299,201.094,420.454,207.071,420.454z"/>
      			<path id="rect12207" fill="none" stroke="#808080" strokeWidth="1.4584" strokeLinecap="round" d="M212.19,425.887h140.876
      				c4.896,0,8.864,3.969,8.864,8.864v28.951c0,4.896-3.969,8.863-8.864,8.863H212.19c-4.896,0-8.864-3.968-8.864-8.863v-28.951
      				C203.326,429.856,207.294,425.887,212.19,425.887z"/>
      			<path id="rect4247" d="M225.68,440.412h29.395c5.28,0,9.56,4.28,9.56,9.561l0,0c0,5.279-4.28,9.56-9.56,9.56H225.68
      				c-5.28,0-9.56-4.28-9.56-9.56l0,0C216.12,444.692,220.4,440.412,225.68,440.412z"/>
      			<path id="rect5332" d="M309.676,440.412h29.395c5.28,0,9.561,4.28,9.561,9.561l0,0c0,5.279-4.28,9.56-9.561,9.56h-29.395
      				c-5.28,0-9.561-4.28-9.561-9.56l0,0C300.115,444.692,304.395,440.412,309.676,440.412z"/>
      			<g id="text2887">
      				<path id="path2921" fill="#FF0000" d="M205.847,403.028h7.825c2.236,0,3.354-1.025,3.354-3.075c0-2.049-1.118-3.074-3.354-3.074
      					h-5.589v-1.676h8.943v-2.236h-7.825c-2.236,0-3.354,1.039-3.354,3.118c0,2.02,1.118,3.03,3.354,3.03h5.589v1.677h-8.943V403.028
      					z"/>
      				<path id="path2923" fill="#FF0000" d="M229.324,403.028h-7.825c-2.235,0-3.354-1.118-3.354-3.354v-6.707h11.179v2.235h-8.943
      					v1.676h8.943v2.235h-8.943v0.56c0,0.745,0.373,1.118,1.118,1.118h7.825V403.028z"/>
      				<path id="path2925" fill="#FF0000" d="M230.427,392.954v6.707c0,2.235,1.118,3.354,3.353,3.354h7.826v-2.235h-7.826
      					c-0.745,0-1.118-0.373-1.118-1.118v-6.707H230.427z"/>
      				<path id="path2927" fill="#FF0000" d="M253.903,403.028h-7.825c-2.236,0-3.353-1.118-3.353-3.354v-6.707h11.178v2.235h-8.943
      					v1.676h8.943v2.235h-8.943v0.56c0,0.745,0.373,1.118,1.118,1.118h7.825V403.028z"/>
      				<path id="path2929" fill="#FF0000" d="M266.204,403.028h-7.825c-2.236,0-3.354-1.118-3.354-3.354v-3.354
      					c0-2.235,1.118-3.353,3.354-3.353h7.825v2.235h-7.825c-0.746,0-1.118,0.373-1.118,1.118v3.354c0,0.745,0.373,1.118,1.118,1.118
      					h7.825V403.028z"/>
      				<path id="path2931" fill="#FF0000" d="M267.328,392.954h11.179v2.236h-4.472v7.825h-2.235v-7.825h-4.472V392.954z"/>
      			</g>
      			<g id="text2891">
      				<path id="path2934" fill="#FF0000" d="M298.659,403.028h7.825c2.236,0,3.352-1.025,3.352-3.075c0-2.049-1.116-3.074-3.352-3.074
      					h-5.59v-1.676h8.942v-2.236h-7.824c-2.236,0-3.354,1.039-3.354,3.119c0,2.02,1.118,3.029,3.354,3.029h5.589v1.677h-8.943
      					V403.028z"/>
      				<path id="path2936" fill="#FF0000" d="M310.937,392.954h11.18v2.236h-4.472v7.825h-2.236v-7.825h-4.472V392.954z"/>
      				<path id="path2938" fill="#FF0000" d="M332.187,397.991v-1.677c0-0.746-0.373-1.119-1.118-1.119h-4.471
      					c-0.746,0-1.118,0.373-1.118,1.119v1.677H332.187z M325.48,400.226v2.795h-2.235v-6.707c0-2.236,1.118-3.354,3.354-3.354h4.471
      					c2.236,0,3.354,1.118,3.354,3.354v6.707h-2.236v-2.795H325.48z"/>
      				<path id="path2940" fill="#FF0000" d="M337.765,396.867h6.708v-1.677h-6.708V396.867z M337.765,399.102v3.912h-2.234v-10.06
      					h7.824c2.236,0,3.354,1.021,3.354,3.063c0,0.969-0.16,1.681-0.48,2.135c0.32,0.529,0.48,1.219,0.48,2.068v2.794h-2.235v-2.794
      					c0-0.745-0.373-1.118-1.118-1.118H337.765z"/>
      				<path id="path2942" fill="#FF0000" d="M347.839,392.954h11.179v2.236h-4.472v7.825h-2.235v-7.825h-4.472V392.954z"/>
      			</g>
      			<g id="text2895">
      				<path id="path2945" fill="#FF0000" d="M457.062,493.145h8.023v-2.006h-8.023V493.145z M457.062,497.825h8.023v-2.006h-8.023
      					V497.825z M454.389,500.499v-12.034h9.36c2.674,0,4.011,1.212,4.011,3.637c0,0.99-0.214,1.783-0.642,2.381
      					c0.428,0.588,0.642,1.377,0.642,2.366c0,2.434-1.337,3.65-4.011,3.65H454.389z"/>
      			</g>
      			<g id="text2903">
      				<path id="path2948" fill="#FF0000" d="M543.818,494.985v-2.006c0-0.892-0.445-1.337-1.337-1.337h-5.349
      					c-0.892,0-1.337,0.445-1.337,1.337v2.006H543.818z M535.796,497.659v3.344h-2.675v-8.023c0-2.674,1.338-4.011,4.012-4.011h5.349
      					c2.674,0,4.011,1.337,4.011,4.011v8.023h-2.674v-3.344H535.796z"/>
      			</g>
      			<path onMouseDown={()=>this.leftClicked('LEFT', true)}
                  onMouseUp={()=>this.leftClicked('LEFT', false)}
                  onMouseOut={()=>this.leftClicked('LEFT', false)}
                  id="path2950" fill="none" stroke="#000000" strokeWidth="0.5" d="M63.181,408.339l-5.477,5.478l-5.477,5.477l5.477,5.478
      				l5.477,5.477v-3.286h10.954v-15.336H63.181V408.339z"/>
      			<path onMouseDown={()=>this.rightClicked('RIGHT', true)}
                  onMouseUp={()=>this.rightClicked('RIGHT', false)}
                  onMouseOut={()=>this.rightClicked('RIGHT', false)}
                  id="path3727" fill="none" stroke="#000000" strokeWidth="0.5" d="M139.683,408.339l5.477,5.478l5.477,5.477l-5.477,5.478
      				l-5.477,5.477v-3.286h-10.954v-15.336h10.954V408.339z"/>
      			<path onMouseDown={()=>this.upClicked('UP', true)}
                  onMouseUp={()=>this.upClicked('UP', false)}
                  onMouseOut={()=>this.upClicked('UP', false)}
                  id="path3729" fill="none" stroke="#000000" strokeWidth="0.5" d="M112.276,380.669l-5.477-5.477l-5.477-5.477
      				l-5.477,5.477l-5.477,5.477h3.286v10.954h15.336v-10.954H112.276z"/>
      			<path onMouseDown={()=>this.downClicked('DOWN', true)}
                  onMouseUp={()=>this.downClicked('DOWN', false)}
                  onMouseOut={()=>this.downClicked('DOWN', false)}
                  id="path3731" fill="none" stroke="#000000" strokeWidth="0.5" d="M112.276,458.333l-5.477,5.478l-5.477,5.477
      				l-5.477-5.477l-5.477-5.478h3.286v-10.954h15.336v10.954H112.276z"/>
      			<path id="path3763" fill="none" stroke="#000000" strokeWidth="0.7366" d="M114.646,419.111
      				c0.004,7.26-5.876,13.148-13.136,13.153s-13.148-5.877-13.153-13.136c0-0.006,0-0.012,0-0.018
      				c-0.005-7.26,5.876-13.148,13.136-13.153c7.259-0.005,13.148,5.876,13.153,13.136
      				C114.646,419.099,114.646,419.105,114.646,419.111z"/>
      			<path onClick={this.selectClicked} id="rect3789" fill="#1A1A1A" d="M228.2,442.274h24.391c5.28,0,9.56,3.448,9.56,7.702l0,0c0,4.254-4.28,7.702-9.56,7.702
      				H228.2c-5.28,0-9.56-3.448-9.56-7.702l0,0C218.64,445.722,222.92,442.274,228.2,442.274z"/>
      			<path onClick={this.startClicked} id="rect3791" fill="#1A1A1A" d="M312.173,442.274h24.392c5.279,0,9.56,3.448,9.56,7.702l0,0c0,4.254-4.28,7.702-9.56,7.702
      				h-24.392c-5.279,0-9.56-3.448-9.56-7.702l0,0C302.613,445.722,306.893,442.274,312.173,442.274z"/>
      		</g>
      	</g>
      </switch>
      </svg>
    );
  }
}

export default Controller;

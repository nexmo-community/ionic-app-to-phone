import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton} from '@ionic/react';
import nexmoClient, { Application, NXMCall } from 'nexmo-client';
import React from 'react';
import './Home.css';

class Home extends React.Component<{}, { application: Application | null, call: NXMCall | null, buttonText: string, buttonAction: any, clientState: string, callStatus: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      application: null,
      call: null,
      buttonText: "Login",
      buttonAction: () => this.login("ALICE_JWT"),
      clientState: "Unknown",
      callStatus: "Idle",
    };
  }

  login(jwt: string) {
    let nexmo = new nexmoClient();
    nexmo.login(jwt).then(app => {
      this.setState({ 
        application: app,
        buttonText: "Call",
        clientState: "Connected",
        buttonAction: () => this.makeCall()
       });
    });
  }

  makeCall() {
    this.state.application?.callServer("").then((call) => {
      this.setState({
        callStatus: "On Call",
        buttonText: "End Call",
        buttonAction: () => this.endCall(),
        call: call
      })
    }).catch((error) => {
      console.error(error);
    });

    this.state.application?.on("call:status:changed", (nxmCall: NXMCall) => {
      if (nxmCall.status === nxmCall.CALL_STATUS.COMPLETED) {
        this.resetCallState();
      }
    });
  }

  endCall() {
    this.state.call?.hangUp().then(() => {
      this.resetCallState();
    });
  }

  resetCallState() {
    this.setState({
      callStatus: "Idle",
      buttonText: "Call",
      buttonAction: () => this.makeCall(),
      call: null
    });
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Vonage App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Vonage app</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div className="text">
          {this.state.clientState}
            </div>
          <div className="container">
            <div className="text">
              Call Status: {this.state.callStatus}
            </div>
            <IonButton expand="block" onClick={this.state.buttonAction}>
              {this.state.buttonText}
            </IonButton>
          </div>

        </IonContent>
      </IonPage>
    );
  };
}

export default Home;

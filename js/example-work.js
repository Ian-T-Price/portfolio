import React from 'react';

class ExampleWork extends React.Component {
  render() {
    return (
      <section className="section section--alignCentered section--description">

        { this.props.work.map( (example, idx) => {
            return(
              <ExampleWorkBubble example={example} key={idx}/>
            )
          })
        }
      </section>
    )
  }
}

class ExampleWorkBubble extends React.Component {
  render() {
    return(
      <div className="section__exampleWrapper">
        <div className="section__example">
              <img alt="screenshot of a Carlton Carriages Landau and four horses outside Buckingham Palace"
               className="section__exampleImage"
               src="images/carlton-carriages_buckingham-palace_640x350.jpg"/>
          <dl className="color--cloud">
            <dt className="section__exampleTitle section__text--centered">
              Carlton Carriages WordPress Site
            </dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default ExampleWork;

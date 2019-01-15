import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
 
import { Icon } from 'react-icons-kit'
 import { Link } from "gatsby";

class ServiceList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { ...props } = this.props;
    const { Titulo,mini } = props;
    delete props.Titulo;
    delete props.mini;

    return (
      <StaticQuery
        query={graphql`
          query {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "default-service" } } }
            ) {
              edges {
                node {
                	   fields{
          slug
        }
                  frontmatter {
                    title
                    descripcion
                    portada {
                      childImageSharp {
                        sizes(maxWidth: 400) {
                          ...GatsbyImageSharpSizes_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => {



          const Items=(
             <div className="columns is-multiline">
                  {data.allMarkdownRemark.edges.map((item, i) => {
                    return (
                       
                        





<div className="column is-6">
<div class="box" key={i.toString()}>
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
          <Img
                          style={{ width: "100%", height:"100%", margin: "0 auto" }}
                          sizes={
                            item.node.frontmatter.portada.childImageSharp.sizes
                          }
                          alt={item.node.frontmatter.title}
                        />
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong> <Link to={item.node.fields.slug} >{item.node.frontmatter.title}</Link ></strong>
          <br/>
          {item.node.frontmatter.descripcion}
        </p>
      </div>
    
    </div>
  </article>
</div>
</div>

 
                    );
                  })}
                </div> 
            
            )
          
            
          return (
<React.Fragment>
{mini ? (
         <React.Fragment>
         {Items}
         </React.Fragment>
      ) : (
         <section class="widget-service-list section">
              <div class="container">
                <div className="titulo has-text-centered">
                  <h1 name="image" className="title">
 
                    Nuestros Servicios
                  </h1>
                  
                  <h2 className="subtitle">{Titulo}</h2>
                </div>
 {Items}
    
              </div>
            </section>
       
       
      )}






        </React.Fragment>    
          );
        }}
      />
    );
  }
}

export default ServiceList;
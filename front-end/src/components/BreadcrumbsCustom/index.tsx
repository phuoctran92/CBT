import { memo } from "react";
import { Breadcrumbs, IconButton } from "@material-ui/core";
import useStyles from "./styles";
import { Link as RouterLink } from "react-router-dom";
import { Route } from "react-router-dom";
import Images from "config/images";
import clsx from "clsx";
interface BreadcrumbsCustomProps {
  link1?: any;
  link2?: any;
  link3?: string;
  className?: any,
}

const Fragment = memo((props: { children: any }) => {
  return (<>{props.children}</>)
})

const BreadcrumbsCustom = memo((props: BreadcrumbsCustomProps) => {
  const classes = useStyles();
  const { className } = props;

  return (
    <Route>
      {({ location }) => {

        
        const isPatchAdmin = /^\/admin\//.test(location.pathname);
        let path = location.pathname
        if(isPatchAdmin) path = path.replace(/^\/admin\//, '/');
        const pathnames = path.split("/").filter((x) => x);
        //console.log(pathnames, 'location.pathname.split("/")')
        return (
          <Breadcrumbs
            aria-label="Breadcrumb"
            className={className}
            separator={<img src={Images.icCaretRight} alt="" />}
            classes={{
              root: clsx(classes.containerBreadcrumbs),
            }}
          >
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `${isPatchAdmin ? '/admin' : ''}/${pathnames.slice(0, index + 1).join("/")}`;
              const { link1, link2, link3 } = props;
              return last ? (
                <Fragment key={to}>{link3 || link2}</Fragment>
              ) : (
                <RouterLink to={to} key={to}>
                  {
                    !index && (
                      <IconButton>
                        <img src={(!!index && link3) ? Images.icCaretRight : Images.icBack} alt="icon" />
                      </IconButton>
                    )
                  }
                  <span>{(!!index && link3) ? link2 : link1}</span>
                </RouterLink>
              );
            })}
          </Breadcrumbs>
        );
      }}
    </Route>
  );
});

export default BreadcrumbsCustom;

import React, { FC, PropsWithChildren, ReactNode } from "react";

interface HomeTemplateProps {
  header?: ReactNode,
  body?: ReactNode,
  footer?: ReactNode
}

export const HomeTemplate: FC<HomeTemplateProps> = ({
  header, body, footer
}) =>  {
  return <>
    { header && <header>
      <div className={"container-fluid"}>
        { header }
      </div>
    </header> }
    { body && <div className={"container-fluid"}>
      { body }
    </div>}
    <footer>
      { footer && <div className={"container-fluid"}>
        { footer }
      </div> }
    </footer>
  </>
}
import React, { FC, ReactNode } from "react";

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
        { header }
    </header> }
    { body && <div>
      { body }
    </div>}
    <footer>
      { footer && <div>
        { footer }
      </div> }
    </footer>
  </>
}
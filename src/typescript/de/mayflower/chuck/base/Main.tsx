
    import * as chuck    from '..';
    import { Website }   from '..';
    import * as React    from 'react';
    import * as ReactDOM from 'react-dom';

    /*******************************************************************************************************************
    *   The main class contains the application's point of entry.
    *
    *   TODO Unify names for all tests.
    *   TODO Hide empty image in empty list
    *   TODO White logo image border via css?
    *
    *   TODO MINOR Update to latest npm packages version.
    *   TODO MINOR Update Jest Tests for the Website component.
    *******************************************************************************************************************/
    export class Main
    {
        /***************************************************************************************************************
        *   This method is invoked when the application starts.
        ***************************************************************************************************************/
        public static main() : void
        {
            // set website title
            document.title = chuck.Setting.TITLE;

            // acclaim debug console
            chuck.Debug.major.log( chuck.Setting.TITLE + ', ' + chuck.Setting.COPYRIGHT );
            chuck.Debug.major.log();

            // add container div
            const websiteContainer:HTMLDivElement = document.createElement( 'div' );
            document.body.appendChild( websiteContainer );

            // create and mount React component 'Website' into container div
            const website:JSX.Element = <Website />;

            ReactDOM.render(
                website,
                websiteContainer
            );
        }
    }

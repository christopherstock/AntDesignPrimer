
    /*******************************************************************************************************************
    *   All settings for the application.
    *******************************************************************************************************************/
    // tslint:disable:max-line-length
    export class Setting
    {
        /** The name of the application. */
        public  static  readonly    TITLE                       :string             = 'Ant Design meets The International Chuck Norris Database';
        /** The copyright information. */
        public  static  readonly    COPYRIGHT                   :string             = '(c) 2019 Mayflower GmbH, v.1.0';

        /** The global debug switch. */
        public  static  readonly    DEBUG_MODE                  :boolean            = true;
        /** Debug switch to mock ALL http requests, allowing offline mode. */
        public  static  readonly    DEBUG_MOCK_ALL_REQUESTS     :boolean            = ( true && Setting.DEBUG_MODE );
        /** Debug mocked timeout for API requests in millis. */
        public  static  readonly    DEBUG_MOCK_REQUEST_DELAY    :number             = 1000;

        /** The relative path from index.html where all images reside. */
        public  static  readonly    PATH_IMAGE                  :string             = 'res/image/';

        /** The base API URL. */
        public  static  readonly    BASE_API_URL                :string             = 'https://pdf.catalano.de/api/';
    }

using System;
using System.IO;
using Rogue.Data;
using SQLite;

namespace Rogue.iOS.Data
{
    public class SQLite_IOS : ISQLite
    {
        public SQLite_IOS()
        {
        }

        public SQLiteConnection GetConnection()
        {
            var sqliteFileName = "TestDB.db3";
            string documentsPath = Environment.GetFolderPath(Environment.SpecialFolder.Personal);
            var path = Path.Combine(documentsPath, "..", "Library", sqliteFileName);
            var conn = new SQLiteConnection(path);

            return conn;
        }
    }
}

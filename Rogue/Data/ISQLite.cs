using System;
using SQLite;

namespace Rogue.Data
{
    public interface ISQLite
    {
        SQLiteConnection GetConnection();

    }
}

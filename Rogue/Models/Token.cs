using System;

namespace Rogue.Models
{
    public class Token
    {
        public int Id { get; set; }
        public string access_token { get; set; }
        public string error_desc { get; set; }
        public DateTime expire_date { get; set; }

        public Token() { }

    }
}
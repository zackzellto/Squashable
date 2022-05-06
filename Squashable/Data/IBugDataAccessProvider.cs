using System;
namespace Squashable.Data
{
    public interface IBugDataAccessProvider
    {
        void AddBugInfo(BugInfo bugInfo);

        void UpdateBugInfo(BugInfo bugInfo);

        void DeleteBugInfo(int id);

        BugInfo GetBugID(int id);

        List<BugInfo> GetBugInfo();
    }
}


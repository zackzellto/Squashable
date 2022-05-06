using System;

namespace Squashable.Data
{
    public class BugDataAccessProvider : IBugDataAccessProvider
    {
        private readonly BugDataContext _context;

        public BugDataAccessProvider(BugDataContext context)
        {
            _context = context;
        }

        // POST api/BugInfo
        public void AddBugInfo(BugInfo bugInfo)
        {
            _context.squashableBugInfo.Add(bugInfo);
            _context.SaveChanges();
        }

        // DELETE api/BugInfo/id
        public void DeleteBugInfo(int id)
        {
            var specificBug = _context.squashableBugInfo.FirstOrDefault(f => f.Id == id);
            _context.squashableBugInfo.Remove(specificBug);
            _context.SaveChanges();
        }

        // GET api/BugInfo/id
        public BugInfo GetBugID(int id)
        {
            return _context.squashableBugInfo.FirstOrDefault(f => f.Id == id);

        }

        // GET api/BugInfo
        public List<BugInfo> GetBugInfo()
        {
           return _context.squashableBugInfo.ToList();
        }

        // PUT api/BugInfo
        public void UpdateBugInfo(BugInfo bugInfo)
        {
            _context.squashableBugInfo.Update(bugInfo);
            _context.SaveChanges();
        }
    }
}


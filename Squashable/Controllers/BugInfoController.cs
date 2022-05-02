#nullable disable
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Squashable;

namespace Squashable.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BugInfoController : ControllerBase
    {
        private readonly BugDataContext _context;

        public BugInfoController(BugDataContext context)
        {
            _context = context;
        }

        // GET: api/BugInfo
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BugInfo>>> GetBugInfo()
        {
            return await _context.BugInfo.ToListAsync();
        }

        // GET: api/BugInfo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<BugInfo>> GetBugInfo(int id)
        {
            var bugInfo = await _context.BugInfo.FindAsync(id);

            if (bugInfo == null)
            {
                return NotFound();
            }

            return bugInfo;
        }

        // PUT: api/BugInfo/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutBugInfo(int id, BugInfo bugInfo)
        {
            if (id != bugInfo.Id)
            {
                return BadRequest();
            }

            _context.Entry(bugInfo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BugInfoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/BugInfo
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<BugInfo>> PostBugInfo(BugInfo bugInfo)
        {
            _context.BugInfo.Add(bugInfo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetBugInfo", new { id = bugInfo.Id }, bugInfo);
        }

        // DELETE: api/BugInfo/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteBugInfo(int id)
        {
            var bugInfo = await _context.BugInfo.FindAsync(id);
            if (bugInfo == null)
            {
                return NotFound();
            }

            _context.BugInfo.Remove(bugInfo);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool BugInfoExists(int id)
        {
            return _context.BugInfo.Any(e => e.Id == id);
        }
    }
}
